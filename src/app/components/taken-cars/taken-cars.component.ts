import { Component, Input } from '@angular/core';
import { Ticket } from 'src/app/models/Ticket';
import { User } from 'src/app/models/User';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { PurchaseCarService } from 'src/app/services/purchase-car.service';

@Component({
  selector: 'app-taken-cars',
  templateUrl: './taken-cars.component.html',
  styleUrls: ['./taken-cars.component.scss']
})
export class TakenCarsComponent {
  user: User | undefined;
  Ticekts: Ticket[] | undefined;
  constructor(
    private authService: AuthServiceService,
    private purchase: PurchaseCarService
  ) {
    const phoneNumber = localStorage.getItem('PhoneNumber') || '';

    this.purchase.getPurchasedCars(phoneNumber).subscribe(
      (purchasedCars) => {
        console.log(purchasedCars)
        this.Ticekts = purchasedCars
      },
      (error) => {
        console.error(error);
      }
    );
  }

}

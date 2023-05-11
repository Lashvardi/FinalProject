import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Car } from 'src/app/models/car';
import { GetCarService } from 'src/app/services/get-car.service';
import { MessageService } from 'src/app/services/message.service';
import { PurchaseCarService } from 'src/app/services/purchase-car.service';

@Component({
  selector: 'app-car-rent-detail',
  templateUrl: './car-rent-detail.component.html',
  styleUrls: ['./car-rent-detail.component.scss'],
})
export class CarRentDetailComponent {
  car: Car | undefined;
  multiplier: number = 1;
  PhoneNumber: string = localStorage.getItem('PhoneNumber') || '';
  OwnerPhoneNumber: string = '';
  constructor(
    private route: ActivatedRoute,
    private carService: GetCarService,
    private purchase: PurchaseCarService,
    private Message: MessageService,
    private router: Router
  ) {}

  ngOnInit() {
    const carIdString = this.route.snapshot.paramMap.get('id');
    if (carIdString) {
      const carId = +carIdString;
      this.getCarDetails(carId);
    }
  }

  getCarDetails(carId: number) {
    this.carService.GetCarById(carId).subscribe(
      (response: Car) => {
        this.car = response;
        this.OwnerPhoneNumber = this.car?.createdBy ?? '';
      },
      (error: any) => {
        console.error('Error retrieving car details:', error);
      }
    );
  }

  BuyCar(phoneNumber: string, carId: number, multiplier: number) {
    phoneNumber = this.PhoneNumber;
    carId = this.car?.id || 0;
    multiplier = this.multiplier;

    const purchaseObservable = this.purchase.purchaseCar(
      phoneNumber,
      carId,
      multiplier
    );

    const sendMessageObservable = this.Message.SendMessage(
      this.OwnerPhoneNumber,
      carId
    );

    forkJoin([purchaseObservable, sendMessageObservable]).subscribe(
      ([purchaseResponse, sendMessageResponse]) => {
        console.log('Car purchased successfully:', purchaseResponse);
        console.log('Message sent successfully:', sendMessageResponse);

      },
      (error) => {
        console.error('Error occurred:', error);
      }
      
    );
    this.router.navigate(['/thankyourenting']);

  }
}

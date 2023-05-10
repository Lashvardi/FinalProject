import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { GetCarService } from 'src/app/services/get-car.service';
import { PurchaseCarService } from 'src/app/services/purchase-car.service';

@Component({
  selector: 'app-car-rent-detail',
  templateUrl: './car-rent-detail.component.html',
  styleUrls: ['./car-rent-detail.component.scss'],
})
export class CarRentDetailComponent {
  car: Car | undefined;
  multiplier: number = 1;
  PhoneNumber: string = localStorage.getItem("PhoneNumber") || "";
  constructor(
    private route: ActivatedRoute,
    private carService: GetCarService,
    private purchase: PurchaseCarService
  ) {}

  ngOnInit() {
    const carIdString = this.route.snapshot.paramMap.get('id');
    if (carIdString) {
      const carId = +carIdString;
      this.getCarDetails(carId);
    }
  }

  BuyCar(phoneNumber: string, carId: number, multiplier: number) {
    phoneNumber = this.PhoneNumber;
    carId = this.car?.id || 0;
     multiplier = this.multiplier;
    this.purchase.purchaseCar(phoneNumber, carId, multiplier).subscribe(
      (response) => {
        console.log('Car purchased successfully:', response);
      },
      (error) => {
        console.error('Error occurred while purchasing car:', error);
      }
    );
  }

  getCarDetails(carId: number) {
    this.carService.GetCarById(carId).subscribe(
      (car) => {
        this.car = car;
        console.log(this.car);
      },
      (error) => console.error(error)
    );
  }
}

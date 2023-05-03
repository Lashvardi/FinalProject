import { Component } from '@angular/core';
import { Car } from 'src/app/models/car';
import { GetCarService } from 'src/app/services/get-car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent {
  cars: Car[] = [];


  constructor(public getCar: GetCarService){
    this.getCar.GetCars().subscribe((data) => {
      this.cars = data;
    })
  }
}

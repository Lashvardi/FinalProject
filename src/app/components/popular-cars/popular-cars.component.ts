import { Component } from '@angular/core';
import { Car } from 'src/app/models/car';
import { GetCarService } from 'src/app/services/get-car.service';

@Component({
  selector: 'app-popular-cars',
  templateUrl: './popular-cars.component.html',
  styleUrls: ['./popular-cars.component.scss'],
})
export class PopularCarsComponent {
  cars: Car[] = [];

  constructor(public GetCarService: GetCarService) {
    this.GetCarService.getPopularCars().subscribe((data) => {
      this.cars = data;
    });
  }
}

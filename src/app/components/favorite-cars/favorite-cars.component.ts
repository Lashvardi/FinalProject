import { Component } from '@angular/core';
import { Car } from 'src/app/models/car';
import { GetCarService } from 'src/app/services/get-car.service';

@Component({
  selector: 'app-favorite-cars',
  templateUrl: './favorite-cars.component.html',
  styleUrls: ['./favorite-cars.component.scss']
})
export class FavoriteCarsComponent {
  cars: Car[] = [];

  constructor(public GetCarService: GetCarService) {
    this.GetCarService.GetFavoriteCars().subscribe((data) => {
      this.cars = data;
    });
  }
}

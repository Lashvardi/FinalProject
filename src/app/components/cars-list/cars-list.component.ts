import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Car } from 'src/app/models/car';
import { GetCarService } from 'src/app/services/get-car.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent {
  cars: Car[] = []


  constructor(private http: HttpClient, private GetCarService: GetCarService) {
    this.GetCarService.GetCars().subscribe(data => {
      this.cars = data;
    })
  }

}

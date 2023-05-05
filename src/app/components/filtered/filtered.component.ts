import { Component } from '@angular/core';
import { Car } from 'src/app/models/car';
import { GetCarService } from 'src/app/services/get-car.service';

@Component({
  selector: 'app-filtered',
  templateUrl: './filtered.component.html',
  styleUrls: ['./filtered.component.scss']
})
export class FilteredComponent {

  cars: Car[] = [];
  public cityName: string = '';
  public yearRange: string = '';
  public cities: string[] = [];
  public capacity: number = 0;
  constructor(public getCar: GetCarService){
    this.getCar.getCities()
    .subscribe(cities => {
      this.cities = cities;
    }, error => {
      console.error(error);
    });

    
    this.getCar.getCarsByYear(1995, 2020)
  .subscribe(cars => {
      this.cars = cars;
  }, error => {
    console.error(error);
  });

  }

  getCarsByYearAndCity() {
    if (!this.cityName && !this.yearRange && !this.capacity) {
      this.getCar.GetCars()
        .subscribe(cars => this.cars = cars, error => console.error(error));
    } else if (this.cityName && !this.yearRange && !this.capacity) {
      this.getCar.getCarsByCity(this.cityName )
        .subscribe(cars => this.cars = cars, error => console.error(error));
    } else if (!this.cityName && this.yearRange ) {
      let startYear = 0;
      let endYear = 0;
      if (this.yearRange) {
        [startYear, endYear] = this.yearRange.split('-').map(y => parseInt(y));
      }
      this.getCar.getCarsByYear(startYear, endYear)
        .subscribe(cars => this.cars = cars, error => console.error(error));
    } else {
      let startYear = 0;
      let endYear = 0;
      if (this.yearRange) {
        [startYear, endYear] = this.yearRange.split('-').map(y => parseInt(y));
      }
      this.getCar.getCarsByCityAndYear(this.cityName, startYear, endYear)
        .subscribe(cars => this.cars = cars, error => console.error(error));
    }
  }
  



}

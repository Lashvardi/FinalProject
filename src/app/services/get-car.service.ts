import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceUrlBuilder } from 'src/ServiceUrlBuilder';
import { Car } from '../models/car';
@Injectable({
  providedIn: 'root'
})
export class GetCarService {
  private static RESOURCE_URI: string = "Car";
  constructor(private http: HttpClient) { }

  public GetCars() {
    return this.http.get<Car[]>(ServiceUrlBuilder.buildUrl(GetCarService.RESOURCE_URI));
  }

  getCarsByYear(startYear: number, endYear: number) {
    const url = `Car/byYear?startYear=${startYear}&endYear=${endYear}`;
    return this.http.get<Car[]>(ServiceUrlBuilder.buildUrl(url));
  }

  public getCarsByCity(cityName: string) {
    const url = `${GetCarService.RESOURCE_URI}/byCity?cityName=${cityName}`;
    return this.http.get<Car[]>(ServiceUrlBuilder.buildUrl(url));
  }

  public getCarsByCityAndYear(cityName: string, startYear: number, endYear: number) {
    const url = `${GetCarService.RESOURCE_URI}/byCityAndYear?cityName=${cityName}&startYear=${startYear}&endYear=${endYear}`;
    return this.http.get<Car[]>(ServiceUrlBuilder.buildUrl(url));
  }
}

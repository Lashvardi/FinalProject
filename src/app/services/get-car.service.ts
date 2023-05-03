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
}

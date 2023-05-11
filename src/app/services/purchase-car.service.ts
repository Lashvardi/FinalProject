import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { ServiceUrlBuilder } from 'src/ServiceUrlBuilder';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Ticket } from '../models/Ticket';
@Injectable({
  providedIn: 'root'
})
export class PurchaseCarService {
  public static RESOURCE_URL = "Purchase/Purchase"
  public static PURCHASE_URL = "Purchase"
  constructor(public http: HttpClient) { }

  public purchaseCar(PhoneNumber: string, CarId: number, Multiplier: number) {
    return this.http.post(ServiceUrlBuilder.buildRootUrl(`${PurchaseCarService.RESOURCE_URL}`), null, {
      params: new HttpParams()
        .set('phoneNumber', PhoneNumber)
        .set('carId', CarId.toString())
        .set('multiplier', Multiplier.toString())
    });
      }

  public getPurchasedCars(PhoneNumber: string){
    return this.http.get<Ticket[]>(ServiceUrlBuilder.buildRootUrl(`${PurchaseCarService.PURCHASE_URL}/${PhoneNumber}`));
  }
}

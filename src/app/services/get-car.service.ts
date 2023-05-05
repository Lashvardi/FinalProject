import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceUrlBuilder } from 'src/ServiceUrlBuilder';
import { Car } from '../models/car';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetCarService {

  private static RESOURCE_URI: string = "Car";
  private static Popular_URi: string = "Car/popular";
  constructor(private http: HttpClient) { }

  public GetCars() {
    return this.http.get<Car[]>(ServiceUrlBuilder.buildUrl(GetCarService.RESOURCE_URI));
  }

  getPopularCars() {
    return this.http.get<Car[]>(ServiceUrlBuilder.buildUrl(GetCarService.Popular_URi));
  }

  public GetCarsPaginated(pageNumber: number, pageSize: number) {
    const params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());
    return this.http.get<Car[]>(ServiceUrlBuilder.buildUrl(GetCarService.RESOURCE_URI), { params });
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

  public getCities(): Observable<string[]> {
    const url = `Car/cities`;
    return this.http.get<string[]>(ServiceUrlBuilder.buildUrl(url));
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceUrlBuilder } from 'src/ServiceUrlBuilder';
import { Car } from '../models/car';
import { Observable } from 'rxjs';
import { PaginatedData } from '../models/paginated';
@Injectable({
  providedIn: 'root',
})
export class GetCarService {
  private static RESOURCE_URI: string = 'Car';
  private static Popular_URi: string = 'Car/popular';
  private static Favorite_URI: string = 'Users';
  public static PAGINATED_URI: string = 'api/Car/paginated'
  constructor(private http: HttpClient) {}

  public GetCars() {
    return this.http.get<Car[]>(
      ServiceUrlBuilder.buildUrl(GetCarService.RESOURCE_URI)
    );
  }

  public getPaginatedCars(pageIndex: number, pageSize: number): Observable<PaginatedData<Car>> {
    const url = ServiceUrlBuilder.buildRootUrl(`${GetCarService.PAGINATED_URI}?pageIndex=${pageIndex}&pageSize=${pageSize}`);
    return this.http.get<PaginatedData<Car>>(url);
  }

  public GetCarById(id: number) {
    return this.http.get<Car>(
      ServiceUrlBuilder.buildUrl(`${GetCarService.RESOURCE_URI}/${id}`)
    );
  }

  public getPopularCars() {
    return this.http.get<Car[]>(
      ServiceUrlBuilder.buildUrl(GetCarService.Popular_URi)
    );
  }

  getCarsByCapacity(capacity: number): Observable<Car[]> {
    return this.http.get<Car[]>(ServiceUrlBuilder.buildUrl(`${GetCarService.RESOURCE_URI}/byCapacity?capacity=${capacity}`));
  }
  public addCar(car: Car): Observable<Car> {
    const url = ServiceUrlBuilder.buildUrl(GetCarService.RESOURCE_URI);
    return this.http.post<Car>(url, car);
  }

  public GetFavoriteCars() {
    const phoneNumber = localStorage.getItem('PhoneNumber') || '';
    return this.http.get<Car[]>(
      ServiceUrlBuilder.buildUrl(
        `${GetCarService.Favorite_URI}/${phoneNumber}/favorite-cars`
      )
    );
  }

  getCarsByYear(startYear: number, endYear: number) {
    const url = `Car/byYear?startYear=${startYear}&endYear=${endYear}`;
    return this.http.get<Car[]>(ServiceUrlBuilder.buildUrl(url));
  }

  public getCarsByCity(cityName: string) {
    const url = `${GetCarService.RESOURCE_URI}/byCity?cityName=${cityName}`;
    return this.http.get<Car[]>(ServiceUrlBuilder.buildUrl(url));
  }

  public getCarsByCityAndYear(
    cityName: string,
    startYear: number,
    endYear: number
  ) {
    const url = `${GetCarService.RESOURCE_URI}/byCityAndYear?cityName=${cityName}&startYear=${startYear}&endYear=${endYear}`;
    return this.http.get<Car[]>(ServiceUrlBuilder.buildUrl(url));
  }

  public getCities(): Observable<string[]> {
    const url = `Car/cities`;
    return this.http.get<string[]>(ServiceUrlBuilder.buildUrl(url));
  }
}

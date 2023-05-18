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
  public static PAGINATED_URI: string = 'api/Car/paginated';
  public static FILTER_URI: string = 'api/Car/filter';

  constructor(private http: HttpClient) {}

  public GetCars() {
    return this.http.get<Car[]>(
      ServiceUrlBuilder.buildUrl(GetCarService.RESOURCE_URI)
    );
  }

  public getPaginatedCars(
    capacity?: number,
    startYear?: number,
    endYear?: number,
    city?: string,
    pageIndex: number = 1,
    pageSize: number = 10
  ): Observable<PaginatedData<Car>> {
    let params = new HttpParams();

    if (capacity) {
      params = params.set('capacity', capacity.toString());
    }

    if (startYear) {
      params = params.set('startYear', startYear.toString());
    }

    if (endYear) {
      params = params.set('endYear', endYear.toString());
    }

    if (city) {
      params = params.set('city', city);
    }

    params = params
      .set('pageIndex', pageIndex.toString())
      .set('pageSize', pageSize.toString());

    const url = ServiceUrlBuilder.buildRootUrl(GetCarService.FILTER_URI);

    return this.http.get<PaginatedData<Car>>(url, { params });
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

  public getCities(): Observable<string[]> {
    const url = `Car/cities`;
    return this.http.get<string[]>(ServiceUrlBuilder.buildUrl(url));
  }
}

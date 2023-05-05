import { HttpClient } from '@angular/common/http';
import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { Car } from 'src/app/models/car';
import { GetCarService } from 'src/app/services/get-car.service';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, SwiperOptions, Virtual } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Scrollbar, A11y, Virtual]);
@Component({
  selector: 'app-cars-card',
  templateUrl: './cars-card.component.html',
  styleUrls: ['./cars-card.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class CarsCardComponent {
  @Input() car: Car | undefined;
  constructor(private http: HttpClient) {}

  addToFavorites(carId: number) {
    const userId = '1609';
    const url = `https://localhost:7149/api/Users/${userId}/favorites/${carId}`;

    this.http.post(url, {}).subscribe(() => {
      // Handle success
      console.log('Added to favorites!');
    }, (error) => {
      // Handle error
      console.error(error);
    });
  }

}

import { Component } from '@angular/core';
import { GetCarService } from 'src/app/services/get-car.service';
import { Car } from 'src/app/models/car';
import { Observable } from 'rxjs';
import { PaginatedData } from 'src/app/models/paginated';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-my-cars',
  templateUrl: './my-cars.component.html',
  styleUrls: ['./my-cars.component.scss'],
})
export class MyCarsComponent {
  cars: Car[] = [];
  ownerPhoneNumber: string = localStorage.getItem('PhoneNumber') || '';

  constructor(private getCarService: GetCarService) {
    this.getCarService.getCarByOwner(this.ownerPhoneNumber).subscribe((data) => {
      this.cars = data;
    });
  }
}

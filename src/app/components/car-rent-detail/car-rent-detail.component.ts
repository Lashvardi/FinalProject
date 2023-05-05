import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { GetCarService } from 'src/app/services/get-car.service';

@Component({
  selector: 'app-car-rent-detail',
  templateUrl: './car-rent-detail.component.html',
  styleUrls: ['./car-rent-detail.component.scss']
})
export class CarRentDetailComponent {
  car: Car | undefined;

  constructor(private route: ActivatedRoute, private carService: GetCarService) { }

  ngOnInit() {
    const carIdString = this.route.snapshot.paramMap.get('id');
    if (carIdString) {
      const carId = +carIdString;
      this.getCarDetails(carId);
    }
  }
  
  getCarDetails(carId: number) {
    this.carService.GetCarById(carId).subscribe(
      car => {
        this.car = car;
        console.log(this.car);
      },
      error => console.error(error)
    );
  }
}

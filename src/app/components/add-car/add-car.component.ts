import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Car } from 'src/app/models/car';
import { GetCarService } from 'src/app/services/get-car.service';
import {CarOption} from "./carOption"
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss'],
})
export class AddCarComponent {
  car: Car = {
    id: 0,
    brand: '',
    model: '',
    year: 2022,
    imageUrl1: '',
    imageUrl2: '',
    imageUrl3: '',
    price: 70,
    capacity: 4,
    transmission: '',
    createdBy: localStorage.getItem("PhoneNumber") || '',
    fuelCapacity: 70,
    city: '',
    latitude: 0 ,
    longitude: 0,
  };



  selectedCarBrand: string = '';
  selectedCarModel: string = '';


  carBrands: CarOption[] = [
    { label: 'Ferrari', value: 'Ferrari' },
    { label: 'Porsche', value: 'Porsche' },
    { label: 'Lamborghini', value: 'Lamborghini' },
    { label: 'Aston Martin', value: 'AstonMartin' },
    { label: 'McLaren', value: 'McLaren' },
    { label: 'Bugatti', value: 'Bugatti' },
  ];

  carModels: { [key: string]: CarOption[] } = {
    Ferrari: [
      { label: '488 GTB', value: '488 GTB' },
      { label: '812 Superfast', value: '812 Superfast' },
      { label: 'SF90 Stradale', value: 'SF90 Stradale' },
      { label: 'Portofino', value: 'Portofino' },
      { label: 'Roma', value: 'Roma' },
    ],
    Porsche: [
      { label: '911', value: '911' },
      { label: 'Cayman', value: 'Cayman' },
      { label: 'Boxster', value: 'Boxster' },
      { label: 'Panamera', value: 'Panamera' },
      { label: 'Taycan', value: 'Taycan' },
    ],
    Lamborghini: [
      { label: 'Aventador', value: 'Aventador' },
      { label: 'Huracán', value: 'Huracán' },
      { label: 'Urus', value: 'Urus' },
      { label: 'Sian', value: 'Sian' },
      { label: 'Sián FKP 37', value: 'Sián FKP 37' },
    ],
    AstonMartin: [
      { label: 'DB11', value: 'DB11' },
      { label: 'Vantage', value: 'Vantage' },
      { label: 'DBS Superleggera', value: 'DBS Superleggera' },
      { label: 'Valhalla', value: 'Valhalla' },
      { label: 'Valkyrie', value: 'Valkyrie' },
    ],
    McLaren: [
      { label: '570S', value: '570S' },
      { label: '720S', value: '720S' },
      { label: '600LT', value: '600LT' },
      { label: 'Artura', value: 'Artura' },
      { label: 'P1', value: 'P1' },
    ],
    Bugatti: [
      { label: 'Chiron', value: 'Chiron' },
      { label: 'Divo', value: 'Divo' },
      { label: 'Centodieci', value: 'Centodieci' },
      { label: 'EB110', value: 'EB110' },
      { label: 'La Voiture Noire', value: 'La Voiture Noire' },
    ],
  };
  getCarModelOptions(): CarOption[] {
    return this.carModels[this.selectedCarBrand] || [];
  }

  onCarBrandChange(value: string): void {
    this.selectedCarBrand = value;
    this.selectedCarModel = '';
    this.car.brand = value;
  }

  onCarModelChange(value: string): void {
    this.selectedCarModel = value;
    this.car.model = value;
  }
  form = new FormGroup({
    carBrand: new FormControl('',),
    carModel: new FormControl('',),
  });


  constructor(private getCarService: GetCarService) {}

  onSubmit(): void {
    this.getCarService.addCar(this.car).subscribe((newCar: Car) => {
      console.log(`Added new car: ${JSON.stringify(newCar)}`);
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.car.latitude = position.coords.latitude;
          this.car.longitude = position.coords.longitude;
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
      this.car = {
        id: 0,
        brand: '',
        model: '',
        year: 0,
        imageUrl1: '',
        imageUrl2: '',
        imageUrl3: '',
        price: 0,
        capacity: 0,
        transmission: '',
        createdBy: '',
        fuelCapacity: 0,
        city: '',
        latitude: 0,
        longitude: 0,
      };
    });
  }
}

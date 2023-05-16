import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { PaginatedData } from 'src/app/models/paginated';
import { GetCarService } from 'src/app/services/get-car.service';

@Component({
  selector: 'app-filtered',
  templateUrl: './filtered.component.html',
  styleUrls: ['./filtered.component.scss'],
})
export class FilteredComponent {
  // ? Car Variables
  cars: Car[] = [];


  // ? Pagination Variables
  public totalPages: number = 0;
  public currentPage: number = 1;
  visiblePages: number[] = [];

  // ? Filter Variables
  capacity: number = 0;
  public cityName: string = '';
  public yearRange: string = '';
  public cities: string[] = [];
  public selectedCapacity: number = 0;


  constructor(public getCar: GetCarService, private router: Router, private route: ActivatedRoute) {
    this.getCar.getCities().subscribe(
      (cities) => {
        this.cities = cities;
      }
    );
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.currentPage = params['pageIndex'] ? +params['pageIndex'] : 1;
      this.GetPaginatedCars();
    });
  }

  GetPaginatedCars() {
    this.getCar.getPaginatedCars(this.currentPage, 10).subscribe(
      (paginatedData: PaginatedData<Car>) => {
        this.cars = paginatedData.data;
        this.totalPages = Math.ceil(paginatedData.totalItems / 10); // Update totalPages based on totalItems and items per page
        this.updateVisiblePages();
      }
    );
  }


  // ? Pagination Methods
  totalPagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }



  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateQueryParams();
      this.GetPaginatedCars();
      this.updateVisiblePages();
    }
  }



  updateVisiblePages() {
    const totalPages = this.totalPages;
    const currentPage = this.currentPage;
    const start = Math.max(1, currentPage - 4);
    const end = Math.min(start + 9, totalPages);
    this.visiblePages = Array.from({ length: end - start + 1 }, (_, index) => start + index);
  }

  updateQueryParams() {
    const queryParams = { pageIndex: this.currentPage };
    this.router.navigate([], { queryParams, queryParamsHandling: 'merge'});
  }


  // ? Capacity Filter
  getCarsByCapacity() {
    if (!this.capacity) {
      this.getCar.GetCars().subscribe(
        (cars) => (this.cars = cars)
      );
    } else {
      this.getCar.getCarsByCapacity(this.capacity).subscribe(
        (cars) => (this.cars = cars)
      );
    }
  }

  // ? Filter Methods
   getCarsByYearAndCity() {
    // No filter
    if (!this.cityName && !this.yearRange) {
      this.getCar.getPaginatedCars(1, 10).subscribe(
        (paginatedData: PaginatedData<Car>) => {
          this.cars = paginatedData.data;
        }
      );    }
    // City filter only
    else if (this.cityName && !this.yearRange) {
      this.getCar.getCarsByCity(this.cityName).subscribe(
        (cars) => (this.cars = cars)
      );
    }
    // Year filter only
    else if (!this.cityName && this.yearRange) {
      let startYear = 0;
      let endYear = 0;
      if (this.yearRange) {
        [startYear, endYear] = this.yearRange
          .split('-')
          .map((y) => parseInt(y));
      }
      this.getCar.getCarsByYear(startYear, endYear).subscribe(
        (cars) => (this.cars = cars)
      );
    }
    // City and Year filters
    else {
      let startYear = 0;
      let endYear = 0;
      if (this.yearRange) {
        [startYear, endYear] = this.yearRange
          .split('-')
          .map((y) => parseInt(y));
      }
      this.getCar
        .getCarsByCityAndYear(this.cityName, startYear, endYear)
        .subscribe((cars) => (this.cars = cars));
    }
  }
}

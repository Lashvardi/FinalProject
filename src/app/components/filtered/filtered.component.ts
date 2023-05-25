import { Component, HostListener } from '@angular/core';
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
  public startYear: number = 0;
  public endYear: number = 0;

  // ? Filter Variables
  capacity: number = 0;
  public cityName: string = '';
  public yearRange: string = '';
  public cities: string[] = [];
  public selectedCapacity: number = 0;

  constructor(
    public getCar: GetCarService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.getCar.getCities().subscribe((cities) => {
      this.cities = cities;
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.currentPage = params['pageIndex'] ? +params['pageIndex'] : 1;
      this.startYear = params['startYear'] ? +params['startYear'] : 0;
      this.endYear = params['endYear'] ? +params['endYear'] : 0;
      this.capacity = params['capacity'] ? +params['capacity'] : 0;
      this.cityName = params['city'] ? params['city'] : '';
      this.GetPaginatedCars();
    });
  }

  GetPaginatedCars() {
    this.getCar
      .getPaginatedCars(
        this.capacity,
        this.startYear,
        this.endYear,
        this.cityName,
        this.currentPage,
        10
      )
      .subscribe(
        (paginatedData: PaginatedData<Car>) => {
          this.cars = paginatedData.data;
          this.totalPages = paginatedData.totalPages;
          this.updateVisiblePages();
        },
        (error) => {
          if (error.status === 400) {
            // Hide all results or show an error message
            this.cars = [];
            this.totalPages = 0;
          }
        }
      );
  }


  applyFilter() {
    this.currentPage = 1;
    this.updateQueryParams();
    this.GetPaginatedCars();
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

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.updateVisiblePages();
  }

  updateVisiblePages() {
    const totalPages = this.totalPages;
    const currentPage = this.currentPage;
    let start: number, end;

    if (window.innerWidth < 600) {
      start = Math.max(1, currentPage - 2);
      end = Math.min(start + 4, totalPages);
    } else {
      start = Math.max(1, currentPage - 4);
      end = Math.min(start + 9, totalPages);
    }

    this.visiblePages = Array.from(
      { length: end - start + 1 },
      (_, index) => start + index
    );
  }

  updateQueryParams() {
    const queryParams = {
      city: this.cityName || null,
      capacity: this.capacity || null,
      startYear: this.startYear || null,
      endYear: this.endYear || null,
      pageIndex: this.currentPage,
    };
    this.router.navigate([], { queryParams, queryParamsHandling: 'merge' });
  }
}

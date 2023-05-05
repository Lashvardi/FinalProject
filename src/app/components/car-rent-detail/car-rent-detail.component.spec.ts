import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRentDetailComponent } from './car-rent-detail.component';

describe('CarRentDetailComponent', () => {
  let component: CarRentDetailComponent;
  let fixture: ComponentFixture<CarRentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarRentDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarRentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

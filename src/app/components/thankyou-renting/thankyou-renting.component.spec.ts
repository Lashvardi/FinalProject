import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyouRentingComponent } from './thankyou-renting.component';

describe('ThankyouRentingComponent', () => {
  let component: ThankyouRentingComponent;
  let fixture: ComponentFixture<ThankyouRentingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankyouRentingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThankyouRentingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

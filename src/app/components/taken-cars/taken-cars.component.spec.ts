import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakenCarsComponent } from './taken-cars.component';

describe('TakenCarsComponent', () => {
  let component: TakenCarsComponent;
  let fixture: ComponentFixture<TakenCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakenCarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakenCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

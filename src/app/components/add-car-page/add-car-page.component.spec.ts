import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarPageComponent } from './add-car-page.component';

describe('AddCarPageComponent', () => {
  let component: AddCarPageComponent;
  let fixture: ComponentFixture<AddCarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCarPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

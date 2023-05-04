import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredSuccesfulyComponent } from './registered-succesfuly.component';

describe('RegisteredSuccesfulyComponent', () => {
  let component: RegisteredSuccesfulyComponent;
  let fixture: ComponentFixture<RegisteredSuccesfulyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredSuccesfulyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisteredSuccesfulyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

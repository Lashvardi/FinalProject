import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingRightComponent } from './landing-right.component';

describe('LandingRightComponent', () => {
  let component: LandingRightComponent;
  let fixture: ComponentFixture<LandingRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

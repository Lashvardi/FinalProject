import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingLeftComponent } from './landing-left.component';

describe('LandingLeftComponent', () => {
  let component: LandingLeftComponent;
  let fixture: ComponentFixture<LandingLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

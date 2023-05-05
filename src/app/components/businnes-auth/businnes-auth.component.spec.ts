import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinnesAuthComponent } from './businnes-auth.component';

describe('BusinnesAuthComponent', () => {
  let component: BusinnesAuthComponent;
  let fixture: ComponentFixture<BusinnesAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinnesAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinnesAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

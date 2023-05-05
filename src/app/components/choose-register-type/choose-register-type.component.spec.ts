import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseRegisterTypeComponent } from './choose-register-type.component';

describe('ChooseRegisterTypeComponent', () => {
  let component: ChooseRegisterTypeComponent;
  let fixture: ComponentFixture<ChooseRegisterTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseRegisterTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseRegisterTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

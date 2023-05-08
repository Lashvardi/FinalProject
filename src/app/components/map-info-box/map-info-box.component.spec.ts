import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapInfoBoxComponent } from './map-info-box.component';

describe('MapInfoBoxComponent', () => {
  let component: MapInfoBoxComponent;
  let fixture: ComponentFixture<MapInfoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapInfoBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

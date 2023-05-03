import { TestBed } from '@angular/core/testing';

import { GetCarService } from './get-car.service';

describe('GetCarService', () => {
  let service: GetCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

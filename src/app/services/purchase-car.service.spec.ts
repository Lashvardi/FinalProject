import { TestBed } from '@angular/core/testing';

import { PurchaseCarService } from './purchase-car.service';

describe('PurchaseCarService', () => {
  let service: PurchaseCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

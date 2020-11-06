import { TestBed } from '@angular/core/testing';

import { HuerfanoService } from './huerfano.service';

describe('HuerfanoService', () => {
  let service: HuerfanoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HuerfanoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

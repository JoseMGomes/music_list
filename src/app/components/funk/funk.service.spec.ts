import { TestBed } from '@angular/core/testing';

import { FunkService } from './funk.service';

describe('FunkService', () => {
  let service: FunkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

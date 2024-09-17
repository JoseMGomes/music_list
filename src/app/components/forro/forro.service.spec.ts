import { TestBed } from '@angular/core/testing';

import { ForroService } from './forro.service';

describe('ForroService', () => {
  let service: ForroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

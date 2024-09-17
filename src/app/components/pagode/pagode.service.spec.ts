import { TestBed } from '@angular/core/testing';

import { PagodeService } from './pagode.service';

describe('PagodeService', () => {
  let service: PagodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

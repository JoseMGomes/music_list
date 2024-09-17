import { TestBed } from '@angular/core/testing';

import { SertanejoService } from './sertanejo.service';

describe('SertanejoService', () => {
  let service: SertanejoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SertanejoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

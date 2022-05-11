import { TestBed } from '@angular/core/testing';

import { SNameService } from './s-name.service';

describe('SNameService', () => {
  let service: SNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';
import { District } from './districts/district.model';
import { Street } from './streets/street.model';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});

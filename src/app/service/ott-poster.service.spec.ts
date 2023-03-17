import { TestBed } from '@angular/core/testing';

import { OttPosterService } from './ott-poster.service';

describe('OttPosterService', () => {
  let service: OttPosterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OttPosterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

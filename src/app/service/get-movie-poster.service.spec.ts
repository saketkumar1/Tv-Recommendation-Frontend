import { TestBed } from '@angular/core/testing';

import { GetMoviePosterService } from './get-movie-poster.service';

describe('GetMoviePosterService', () => {
  let service: GetMoviePosterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMoviePosterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

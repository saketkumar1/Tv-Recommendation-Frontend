import { TestBed } from '@angular/core/testing';

import { RecommendationMoviesService } from './recommendation-movies.service';

describe('RecommendationMoviesService', () => {
  let service: RecommendationMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecommendationMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

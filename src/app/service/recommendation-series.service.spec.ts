import { TestBed } from '@angular/core/testing';

import { RecommendationSeriesService } from './recommendation-series.service';

describe('RecommendationSeriesService', () => {
  let service: RecommendationSeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecommendationSeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

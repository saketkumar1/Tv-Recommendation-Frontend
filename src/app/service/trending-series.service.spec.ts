import { TestBed } from '@angular/core/testing';

import { TrendingSeriesService } from './trending-series.service';

describe('TrendingSeriesService', () => {
  let service: TrendingSeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrendingSeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TrendingAllService } from './trending-all.service';

describe('TrendingAllService', () => {
  let service: TrendingAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrendingAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

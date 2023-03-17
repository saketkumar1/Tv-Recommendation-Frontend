import { TestBed } from '@angular/core/testing';

import { TopratedSeriesService } from './toprated-series.service';

describe('TopratedSeriesService', () => {
  let service: TopratedSeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopratedSeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

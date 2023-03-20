import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesDashboardComponent } from './series-dashboard.component';

describe('SeriesDashboardComponent', () => {
  let component: SeriesDashboardComponent;
  let fixture: ComponentFixture<SeriesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

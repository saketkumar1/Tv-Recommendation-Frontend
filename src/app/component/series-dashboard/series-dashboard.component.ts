import { RecommendationSeriesService } from './../../service/recommendation-series.service';
import { TrendingSeriesService } from './../../service/trending-series.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TopratedSeriesService } from 'src/app/service/toprated-series.service';

@Component({
  selector: 'app-series-dashboard',
  templateUrl: './series-dashboard.component.html',
  styleUrls: ['./series-dashboard.component.css']
})
export class SeriesDashboardComponent implements OnInit {

  recommendation: any;
  trending: any;
  topRated: any;
  poster: any;


  constructor(private http: HttpClient,
    private topRatedSeries:TopratedSeriesService,
    private trendingseries:TrendingSeriesService,
    private recomendationSeries:RecommendationSeriesService) {

  
  }

  ngOnInit(): void {

    this.topRatedSeries.getTopRated()
    .subscribe(res => {
      return this.topRated = res;
    })


    this.trendingseries.getTrending().
    subscribe(res => {
      return this.trending = res;
    });

    this.recomendationSeries.getRecommendation()
      .subscribe(res=>{
        return this.recommendation=res;
      })
    
  }

  getRecommendation() {
    return this.recommendation.results;
  }

  getTrending() {
    return this.trending.results;
  }

  getTopRated() {
    return this.topRated.results

  }

}

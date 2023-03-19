import { TrendingMoviesService } from './../../service/trending-movies.service';
import { RecommendationMoviesService } from './../../service/recommendation-movies.service';
import { TopRatedService } from './../../service/top-rated.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.css']
})
export class MovieDashboardComponent implements OnInit {

  recommendation: any;
  trending: any;
  topRated: any;
  poster: any;


  constructor(private http: HttpClient,
    private topRatedMovies:TopRatedService,
    private trendingAll:TrendingMoviesService,
    private recomendationMovies:RecommendationMoviesService
    ) {
    // for(var c of this.movies){
    http.jsonp('https://api.themoviedb.org/3/movie/550/recommendations?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&language=en-US&page=1', 'callback')
      .subscribe(res => {
        // this.recommendationList.push(res);
        return this.recommendation = res;
      });
    // // }
  }

  ngOnInit(): void {

    this.topRatedMovies.getTopRated()
    .subscribe(res => {
      return this.topRated = res;
    })

    this.trendingAll.getTrending().
    subscribe(res => {
      return this.trending = res;
    });

  }

  getPoster(id: number) {
    console.log(this.topRated)

    return this.getOttPoster(id).logo_path;
  }


  getOttPoster(id: number) {
    var url = 'https://api.themoviedb.org/3/movie/' + id + '/watch/providers?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb'
    this.http.jsonp(url, 'callback').
      subscribe(e => {
        return this.poster = e;
      });



    return this.poster.results.IN.flatrate[0];
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


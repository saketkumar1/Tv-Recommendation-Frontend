import { FeedbackComponent } from './../feedback/feedback.component';
import { MatDialog } from '@angular/material/dialog';
import { WatchlistService } from './../../service/watchlist.service';
import { TrendingMoviesService } from './../../service/trending-movies.service';
import { RecommendationMoviesService } from './../../service/recommendation-movies.service';
import { TrendingAllService } from './../../service/trending-all.service';
import { Router } from '@angular/router';
import { TopRatedService } from './../../service/top-rated.service';
import { OttPosterService } from './../../service/ott-poster.service';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ParsedVariable } from '@angular/compiler';
import { GetUserDataService } from 'src/app/service/get-user-data.service';
import { GetMoviePosterService } from 'src/app/service/get-movie-poster.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit ,AfterViewInit{


  recommendation: any;
  trending: any;
  topRated: any;
  poster: any;
  username: any;
  userId: any;
  recomList: any;
  temp: any;
  watchlistlen: any;
  movies: any;
  recommendationList: any[] = [];




  constructor(private http: HttpClient,
    private router: Router,
    private topRatedMovies: TopRatedService,
    private trendingAll: TrendingMoviesService,
    private recomendationMovies: RecommendationMoviesService,
    private userDataservice: GetUserDataService,
    private getmovieposterservice: GetMoviePosterService,
    private watchlistService: WatchlistService,
    private dialog: MatDialog) {}


  ngAfterViewInit(): void {

    // >>>>>>>>>>>>>>>>>>> this is for feedback
    this.userId = JSON.parse(localStorage.getItem('userId') + "").id
    this.watchlistService.getWatchlistsize(this.userId).
      subscribe(res => {
        this.watchlistlen = res

        if (this.watchlistlen > 0) {
          let dialogRef = this.dialog.open(FeedbackComponent, {
            height: '500px',
            width: '800px',
          });
        }

        return res;
      })

    throw new Error('Method not implemented.');
  }



  ngOnInit(): void {

   

    this.topRatedMovies.getTopRated()
      .subscribe(res => {
        return this.topRated = res;
      })



    this.recomendationMovies.getRecommendation()
      .subscribe(res => {
        return this.recommendation = res;
      });


    this.trendingAll.getTrending().
      subscribe(res => {
        return this.trending = res;
      })

  }




  getPoster(id: number) {
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


  // >>>>>>>>>>>>>>>>>>> this is for recommendation
  getRecommendation() {

   
    return this.recommendation.results;
  }

   // >>>>>>>>>>>>>>>>>>> this is for trending
  getTrending() {
    return this.trending?.results

  }

   // >>>>>>>>>>>>>>>>>>> this is for toprated
  getTopRated() {
    return this.topRated?.results

  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrendingMoviesService {

  constructor(private http:HttpClient) { }

  getTrending() {
    return  this.http.jsonp('https://api.themoviedb.org/3/trending/movie/day?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb','callback')
  }
}

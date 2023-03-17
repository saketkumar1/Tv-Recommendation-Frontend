import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetMoviePosterService {

  constructor(private http: HttpClient) { }

  getPoster(name:string){
    return this.http.jsonp('https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query='+name, 'callback');
  }
}

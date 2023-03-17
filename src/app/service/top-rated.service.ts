import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TopRatedService {

  topRated:any;
  topRatedList: any[] =[];
  constructor(private http:HttpClient) { }


  getTopRated(){
    return this.http.jsonp('https://api.themoviedb.org/3/movie/top_rated?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&language=en-US&page=1','callback')
  }
}

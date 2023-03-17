import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OttPosterService {

  poster:any;
  constructor(private http:HttpClient) { }

  getOttPoster(id:number){
    var url ='https://api.themoviedb.org/3/movie/'+id+'/watch/providers?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb'
    this.http.jsonp(url,'callback').
    subscribe(e=>{
      return this.poster=e;
    });

    

    return this.poster.results.IN.flatrate[0];
  }


  getOttPosterTv(id:any){
    var url = 'https://api.themoviedb.org/3/tv/' + id + '/watch/providers?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb'
    return this.http.jsonp(url, 'callback')
  }

  getOttPosterMovies(id:any){
    var url = 'https://api.themoviedb.org/3/movie/' + id + '/watch/providers?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb'
    return this.http.jsonp(url, 'callback')
  }

}

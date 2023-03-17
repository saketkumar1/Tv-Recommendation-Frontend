import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecommendationMoviesService {

  id:number=550;
  constructor(private http:HttpClient) {

  
    if(JSON.parse(localStorage.getItem('movieId')+"")!=null){
      let temp=JSON.parse(localStorage.getItem('movieId')+"")['mname']
      this.id=temp
      console.log(this.id);
    }
   }

  getRecommendation(){
    return this.http.jsonp('https://api.themoviedb.org/3/movie/'+this.id+'/recommendations?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&language=en-US&page=1', 'callback')
  }

  getRecommendationFromDataset(id:any) {
    return this.http.get('https://tv-recommendation-hub-backend-urtjok3rza-wl.a.run.app/api/movies/getRecommendations/' + id );
  }
}

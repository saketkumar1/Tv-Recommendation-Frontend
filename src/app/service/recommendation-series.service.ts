import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecommendationSeriesService {

  id:number=1399
  constructor(private http:HttpClient) { 

  
    if(JSON.parse(localStorage.getItem('tvId')+"")!=null){
      let temp=JSON.parse(localStorage.getItem('tvId')+"")['mname']
      this.id=temp
      console.log(this.id);
    }


  }

  getRecommendation(){
    return this.http.jsonp('https://api.themoviedb.org/3/tv/'+this.id+'/recommendations?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&language=en-US&page=1', 'callback')
  }
}

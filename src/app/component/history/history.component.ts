import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetUserDataService } from 'src/app/service/get-user-data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  cardValue:any;
  movieName:any;
  userId:any;
  userHistory:any;
  moviesList:any[]=[];
  movies:any;

  constructor(private route:ActivatedRoute,private http:HttpClient, private userDataservice:GetUserDataService) {}

  ngOnInit(): void {
    this.userId=JSON.parse(localStorage.getItem('userId')+"").id
    this.userDataservice.getUserHistory(this.userId).subscribe(res=>{
    
      this.userHistory=res;

      for(var c of this.userHistory){
        // console.log(c.movie_name);
        this.http.jsonp('https://api.themoviedb.org/3/search/multi?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query='+c.movie_name, 'callback')
        .subscribe(res => {
        this.moviesList.push(res);
        return this.movies = res;
        });
      }

    })

  }


  getMovies(){
    return this.moviesList;
  }

}

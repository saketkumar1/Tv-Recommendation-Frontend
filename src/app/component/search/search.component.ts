import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  cardValue:any;
  movieName:any;

  constructor(private route:ActivatedRoute,private http:HttpClient) {
    this.movieName = this.route.snapshot.paramMap.get('name');
    http.jsonp('https://api.themoviedb.org/3/search/multi?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query="'+this.movieName , 'callback')
    .subscribe(res => {
    return this.cardValue = res;
    });
   }

  ngOnInit(): void {
  }

  movieList(){
    return this.cardValue.results;
  }

}

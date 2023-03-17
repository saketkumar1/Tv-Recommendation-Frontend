import { OttPosterService } from './../../service/ott-poster.service';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() movie:any;
  @Input() typeof:any;
  

  poster:any;

  constructor(private router: Router,private http:HttpClient,
    private ottposter:OttPosterService) { }

  ngOnInit(): void {

    if(this.typeof==2){

      this.ottposter.getOttPosterTv(this.movie.id).
        subscribe(e => {
          return this.poster = e;
      });

    }else{
      this.ottposter.getOttPosterMovies(this.movie.id).
      subscribe(e => {
        return this.poster = e;
    });
    }

  
  }

  getOttPoster() {
    return this.poster?.results?.IN?.flatrate;
  }


  getDetail(id:any){
    this.router.navigate(['/details/id']);
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {


  day:number=0;
  movie:any;


  constructor(private route:Router, private http:HttpClient) { }

  ngOnInit(): void {
  }

  handleNext(){
    this.day=this.day+1;
    let element:HTMLElement = document.getElementById('submit') as HTMLElement;
    element.click();
  }

  handlePrev(){
    this.day=this.day-1;
  }

  onSubmit(data:any){
    // console.log(data.name);
    this.http.jsonp('https://api.themoviedb.org/3/search/multi?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query="'+ data.name , 'callback')
    .subscribe(res => {
    this.movie = res;
    localStorage.setItem('movieId',JSON.stringify({mname:this.movie.results[0].id}));
    // console.log("done");
    return this.movie
    });

    this.route.navigate(['/browse']);

  }

}

import { HistoryService } from './../../service/history.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { WatchlistService } from './../../service/watchlist.service';
import { Component, OnInit, Inject } from '@angular/core';
import * as $ from "jquery";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { identifierName } from '@angular/compiler';
import {MatSnackBar } from '@angular/material/snack-bar'


export class HistoryModel {
  userId: number | undefined;
  movieId: number | undefined;
  movie_name: string|undefined;
  rating:number | undefined;
}



@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  active_array = ['terrible', 'bad', 'not great', 'average', 'good', 'excellent', 'amazing'];
  ans: any = this.active_array[3];
  num: number = 0;
  movies: any;
  moviedetail: any;
  userId:any;
  index:number=3;

  constructor(private watchlistservice: WatchlistService,
    private http: HttpClient,
    private dialog: MatDialogRef<FeedbackComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private historyservice:HistoryService,
    private _snackBar: MatSnackBar) {

      this.userId=JSON.parse(localStorage.getItem('userId')+"").id
  }

  ngOnInit(): void {

    this.watchlistservice.getWatchlist().subscribe(res => {
      this.movies = res;
      return res;
    })

  }

  change(event: any) {
    const smile_value = event.target.value;
    const active_smile = "monkey"

    $('.smile.' + active_smile + ' path').attr('d', 'M10 10 C 20 ' + smile_value + ', 40 ' + smile_value + ', 50 10');

    if (smile_value == 0) {
      this.index=0;
      this.ans = this.active_array[0];
    } else if (smile_value < 10 && smile_value > 5) {
      this.index=1;
      this.ans = this.active_array[1];
    } else if (smile_value < 5 && smile_value > 0) {
      this.index=2;
      this.ans = this.active_array[2];
      this.index=3;
    } else if (smile_value == 10) {
      this.index=3;
      this.ans = this.active_array[3];
    } else if (smile_value > 10 && smile_value < 15) {
      this.index=4;
      this.ans = this.active_array[4];
    } else if (smile_value > 15 && smile_value < 20) {
      this.index=5;
      this.ans = this.active_array[5];
    } else if (smile_value == 20) {
      this.index=6;
      this.ans = this.active_array[6];
    }

  }

  next() {
    this.num++;
  }

  close() {
    this.watchlistservice.deleteWatchList(this.movies[0].id).subscribe(res => {
      console.log("deleted")
      this.dialog.close()
     
    }, (error) => {
      console.log("error Not Found");
    })
  }

  submit(){

    const historymodel = new HistoryModel();
    historymodel.userId = this.userId;
    historymodel.movieId = 10;
    historymodel.movie_name=this.movies[0].movie_name
    historymodel.rating=this.index;

    
    this.historyservice.postHistory(historymodel).
    subscribe(res=>{
      console.log("history done");
    })


    this._snackBar.open('Added to History', 'close', {
      duration: 3000
    });


    this.close();
  }

}
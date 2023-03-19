import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';
import { GetUserDataService } from 'src/app/service/get-user-data.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.css']
})
export class HistoryCardComponent implements OnInit {

  userId: any;
  userHistory: any;
  filmIcon = faTrash;
  movie:any;

  @Input() historyVal: any;
  constructor(private authService: AuthServiceService,
    private route: ActivatedRoute, private http: HttpClient,
    private userDataservice: GetUserDataService,
    private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    // gettting user history
    this.userId = JSON.parse(localStorage.getItem('userId') + "").id
    this.userDataservice.getUserHistory(this.userId).subscribe(res => {
      this.userHistory = res;
    })

  }

  onRemove(movie: any) {

    for (var c of this.userHistory) {

      if ((this.historyVal.results[0].title || this.historyVal.results[0].name) == c.movie_name) {
        this.authService.remove(c.id).subscribe((result) => {
          console.log("Deleted");
        }, (error) => {
          console.log("History Not Found");
        })

        this._snackBar.open((this.historyVal.results[0].title || this.historyVal.results[0].name)+' Deleted', 'close', {
          duration: 3000
        });
        

        if(this.userHistory.length > 0){
          this.http.jsonp('https://api.themoviedb.org/3/search/multi?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query="'+ this.userHistory[this.userHistory.length-2].movie_name , 'callback')
          .subscribe(res => {
          this.movie = res;
          localStorage.setItem('movieId',JSON.stringify({mname:this.movie.results[0].id}));
          // console.log("done");
          return this.movie
          });
          console.log(this.userHistory);
        }


        this.router.navigate(['/browse']);
      }


    }
  }

}

import { MatSnackBar } from '@angular/material/snack-bar';
import { WatchlistService } from './../../service/watchlist.service';
import { FeedbackComponent } from './../feedback/feedback.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { faPlay, faFilm, faCheck } from '@fortawesome/free-solid-svg-icons'


export class watchlistModel {
  userId: number | undefined;
  movieId: number | undefined;
  movie_name: string|undefined;
}

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  playIcon = faPlay;
  filmIcon = faFilm;
  // check = faCheck;
  // cross = faCross
  id: any;
  type: any;
  detail: any;
  video: any;
  variable: String = "BdJKm16Co6M"
  safeURL: SafeResourceUrl;
  userId:any;

  similarList: any[] = [];

  similar: any;
  constructor(private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private _sanitizer: DomSanitizer,
    private dialog: MatDialog,
    private watchlistservice: WatchlistService,
    private _snackBar: MatSnackBar) {



    this.userId=JSON.parse(localStorage.getItem('userId')+"").id

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.id = this.route.snapshot.paramMap.get('id');
    this.type = this.route.snapshot.paramMap.get('type');

    // console.log(this.type)

    if (this.type == 1) {
      http.jsonp("https://api.themoviedb.org/3/movie/" + this.id + "/recommendations?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&language=en-US&page=1", 'callback')
        .subscribe(res => {
          // console.log(res);
          return this.similar = res;
        });

      http.jsonp("https://api.themoviedb.org/3/movie/" + this.id + "/videos?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&language=en-US", 'callback')
        .subscribe(res => {

          return this.video = res;
        });
    } else {
      http.jsonp("https://api.themoviedb.org/3/tv/" + this.id + "/recommendations?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&language=en-US&page=1", 'callback')
        .subscribe(res => {
          // console.log(res);
          return this.similar = res;
        });

      http.jsonp("https://api.themoviedb.org/3/tv/" + this.id + "/videos?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&language=en-US", 'callback')
        .subscribe(res => {

          return this.video = res;
        });
    }




    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video?.results[0].key);

  }


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.type == 1) {

      this.http.get(`https://api.themoviedb.org/3/movie/${this.id}?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&language=en-US`).
        subscribe(res => {
          return this.detail = res;
        });
    } else {
      this.http.get(`https://api.themoviedb.org/3/tv/${this.id}?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&language=en-US`).
        subscribe(res => {
          return this.detail = res;
        });
    }

  }

  getvideo() {
    return 'https://www.youtube.com/embed/' + this.video?.results[0].key;
  }


  getSimilar() {
    return this.similar?.results;
  }

  timeConvert(n: number) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + " hr " + rminutes + " min";
  }

  opent(ref: TemplateRef<any>) {
    // let dialogRef = this.dialog.open(FeedbackComponent, {
    // height: '500px',
    // width: '800px',
    // data: {
    // dataKey: this.detail
    // }
    // });

    this.dialog.open(ref);
  }

  createWatchList() {
    const watchmodel = new watchlistModel();
    watchmodel.userId = this.userId;
    watchmodel.movieId = 10;
    watchmodel.movie_name=(this.detail?.title|| this.detail?.name)

    if(this.type==1){
    localStorage.setItem('movieId',JSON.stringify({mname:(this.detail?.id|| this.detail?.id)}));
    }else{
      localStorage.setItem('tvId',JSON.stringify({mname:(this.detail?.id|| this.detail?.id)}));
    }


    this.watchlistservice.PostWatchlist(watchmodel).subscribe(res => {
      console.log("done");
    })


    this._snackBar.open('Added to Watchlist', 'close', {
      duration: 3000
    });

  }

}

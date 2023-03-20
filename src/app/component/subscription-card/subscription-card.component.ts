import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';
import { GetUserDataService } from 'src/app/service/get-user-data.service';

@Component({
  selector: 'app-subscription-card',
  templateUrl: './subscription-card.component.html',
  styleUrls: ['./subscription-card.component.css']
})
export class SubscriptionCardComponent implements OnInit {
  
  userId:any;
  userSubscription:any;
  logoPoster:any
  Days:any
  results=[
    {
      id:1,
      name:'Silver',
      price:'99',
      ott:['Zee5','Voot']
    },
    {
      id:2,
      name:'Gold',
      price:'199',
      ott:['Hotstar','Prime']
    
    },
    {
      id:3,
      name:'Platinum',
      price:'299',
      ott:['Netflix','Prime','Voot']
    }
  ]
  
  @Input()subsVal:any;
  ottList:any;

  constructor(private router: Router,
    private _snackBar: MatSnackBar,
    private authService:AuthServiceService, 
    private route:ActivatedRoute,
    private http:HttpClient, 
    private userDataservice:GetUserDataService) {  }

  ngOnInit(): void {
      this.http.jsonp('https://api.themoviedb.org/3/watch/providers/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&language=en-US', 'callback')
    . subscribe(result=>{
      return this.logoPoster=result;
    })
    this.calculateDays();
  }

  onRemove(){
    this.authService.removePlan(this.subsVal.id).subscribe((result) => {
      // console.log("Plan Removed Successfully");
    }, (error) => {
      console.log("Plan Not Found");
    })
    this._snackBar.open('Subscription Removed', 'close', {
      duration: 3000
    });

    this.router.navigate(['/browse']);
  }

  

  calculateDays(){
    const date1Modified = new Date(this.subsVal.startDate);
    const date2Modified = new Date(this.subsVal.endDate);
    const Time = date2Modified.getTime()-date1Modified.getTime();
    this.Days = Math.floor(Time/(1000*3600*24));

  }

  getOttList(){
    for(var temp of this.results){
      if(temp.name==this.subsVal.planName){
        this.ottList=temp.ott;
        break;
      }
    }

    console.log(this.ottList)
    return this.ottList;
  }


  getPoster(ott:any){

   


    var map = new Map();  
    map.set('Netflix', '/t2yyOv40HZeVlLjYsCsPHnWLk4W.jpg');
    map.set('Prime', '/emthp39XA2YScoYL1p0sdbAH2WA.jpg');
    map.set('Hotstar', '/dpm29atq9clfBL38NgGxsj2CCe3.jpg');
    map.set('Zee5', '/ajbCmwvZ8HiePHZaOVEgm9MzyuA.jpg');
    map.set('Voot', '/2u1uElmpm4lProS7C9RYcaYLYt1.jpg');

    return map.get(ott);
  }
}

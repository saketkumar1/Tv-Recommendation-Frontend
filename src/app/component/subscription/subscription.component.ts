import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetUserDataService } from 'src/app/service/get-user-data.service';


@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  cardValue:any;
  movieName:any;
  userId:any;
  subsHistory:any;
  subsList:any[]=[];
  subscriptions:any;
  constructor(private route:ActivatedRoute,private http:HttpClient, private userDataservice:GetUserDataService) {}

  ngOnInit(): void {
    this.userId=JSON.parse(localStorage.getItem('userId')+"").id
    // console.log(this.userId);
    this.userId=JSON.parse(localStorage.getItem('userId')+"").id
    this.userDataservice.getSubsHistory(this.userId).subscribe(res=>{
    
      this.subsHistory=res;
      this.subsList.push(res);
      // console.log(this.subsList);
      this.subscriptions = res;   
    })
  }

  getSubscriptions(){
    // console.log(this.subsList);
    return this.subsList;
  }

}


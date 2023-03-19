import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetUserDataService } from 'src/app/service/get-user-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username:any;
  userId:any;
  userData:any;

  constructor(private router:Router,private http:HttpClient, private userDataservice:GetUserDataService) { }

  ngOnInit(): void {

    this.username =JSON.parse(localStorage.getItem('currentUser')+"")['name']
    this.userDataservice.getUserId(this.username)
    .subscribe(id=>{
      localStorage.setItem('userId',JSON.stringify({id}));
      return this.userId=id;
    })

    this.userId=JSON.parse(localStorage.getItem('userId')+"").id
    this.userDataservice.getUserData(this.userId).
    subscribe(res=>{
      return this.userData=res;
    })


  }

}

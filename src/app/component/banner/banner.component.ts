import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { GetUserDataService } from 'src/app/service/get-user-data.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  search= faSearch;
  username:any;
  userId:any;
  userData:any;
 

  constructor(private router:Router,private http:HttpClient, private userDataservice:GetUserDataService) {
   


   }

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

  eventSearch(event: any){
     this.router.navigate(["search/"+event?.target.value])
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { faUser, faLock, faEnvelope, faChild } from '@fortawesome/free-solid-svg-icons';
import { param } from 'jquery';
import { AuthServiceService } from 'src/app/auth-service.service';
import { GetUserDataService } from 'src/app/service/get-user-data.service';
import { MatSnackBar } from '@angular/material/snack-bar'




@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})

export class EditDetailsComponent implements OnInit {
  faLock=faLock;
  faUser=faUser;
  faEnvelope=faEnvelope;
  faChild=faChild;
  usernames:any;
  userId:any;
  userData:any;
  userDetails:any;

  constructor(
    private authService:AuthServiceService,
    private router: Router,
     private http:HttpClient,
     private userDataservice:GetUserDataService,
     private _snackBar:MatSnackBar){}


  changeForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  })

  get name(){return this.changeForm.get('name')}
  get email(){return this.changeForm.get('email')}
  get age(){return this.changeForm.get('age')}
  get username(){return this.changeForm.get('username')}
  get password(){return this.changeForm.get('password')}

  onChanges(){
    console.warn(this.changeForm.value);
    if(this.changeForm.valid){
        this.authService.changes(this.changeForm.value).subscribe((result)=>{
          this._snackBar.open('Details Updated', 'Close', {
            duration: 3000
          });
            // this.router.navigate(['/login']);
        },(error)=>{
          console.log("User Not Found");})
      }
      
  }

  ngOnInit(): void {

    this.usernames =JSON.parse(localStorage.getItem('currentUser')+"")['name'];
    console.log(this.usernames);
    this.userDataservice.getUserId(this.usernames)
    .subscribe(id=>{
      localStorage.setItem('userId',JSON.stringify({id}));
      return this.userId=id;
    })

    this.userId=JSON.parse(localStorage.getItem('userId')+"").id
    this.userDataservice.getUserData(this.userId).
    subscribe(result => {
      console.log(result);
      this.userData= result;

      this.changeForm = new FormGroup({
        name: new FormControl(this.userData.name, [Validators.required, Validators.minLength(3)]),
        email: new FormControl(this.userData.email, [Validators.required, Validators.minLength(3)]),
        age: new FormControl(this.userData.age, [Validators.required]),
        username: new FormControl(this.userData.username, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
        password: new FormControl(this.userData.password, [Validators.required, Validators.minLength(4)])
      })
    })
  }

}

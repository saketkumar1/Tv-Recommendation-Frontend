import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { GetUserDataService } from 'src/app/service/get-user-data.service';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {
  wrong:any;
  faEnvelope=faEnvelope;

  constructor(private authService:AuthServiceService,private router: Router, private userDataservice:GetUserDataService){}
  passwordForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  })

  get password(){return this.passwordForm.get('password')}

  updatePassword(){
    if(this.passwordForm.valid){
      this.userDataservice.updatePassword(this.passwordForm.value).subscribe((result)=>{
           this.router.navigate(['/login']);
      },(error)=>{
        this.wrong = true;
        console.log("Invalid");})
    }
  }
  
  ngOnInit(): void {
  }
}

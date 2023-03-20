import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { GetUserDataService } from 'src/app/service/get-user-data.service';
import { AuthServiceService } from 'src/app/auth-service.service';


@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  wrong:any;
  faLock=faLock;

  constructor(private authService:AuthServiceService,private router: Router, private userDataservice:GetUserDataService){}
  otpForm = new FormGroup({
    gotp: new FormControl('', [Validators.required])
  })

  otp = JSON.parse(localStorage.getItem('otp')+"")['OTP'];


  get gotp(){return this.otpForm.get('gotp')}

  validateOTP(){
    if(this.otp == this.otpForm.value.gotp){
           this.router.navigate(['/new-password']);
      }

    else
    {
      this.wrong=true
    }

  }
  
  ngOnInit(): void {
    console.log(JSON.parse(localStorage.getItem('otp')+"")['OTP']);
  }
}

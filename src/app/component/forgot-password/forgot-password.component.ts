import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { GetUserDataService } from 'src/app/service/get-user-data.service';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  wrong:any;
  faEnvelope=faEnvelope;

  constructor(private authService:AuthServiceService,private router: Router, private userDataservice:GetUserDataService){}
  otpForm = new FormGroup({
    email: new FormControl('', [Validators.required])
  })

  get email(){return this.otpForm.get('email')}

  generateOTP(){
    if(this.otpForm.valid){
      this.userDataservice.generate(this.otpForm.value).subscribe((result)=>{
        this.router.navigate(['/enter-otp']);
          localStorage.setItem('mail',JSON.stringify({mail:this.otpForm.value.email}));
          console.log(this.otpForm.value.email)
          localStorage.setItem('otp',JSON.stringify({OTP:result}));
      },(error)=>{
        this.wrong = true;
        console.log("Invalid");})
    }

   // console.log(JSON.parse(localStorage.getItem('otp')+"")['result']);
  }
  
  ngOnInit(): void {
  }
}

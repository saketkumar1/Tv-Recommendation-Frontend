import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms'
import { faUser, faLock, faEnvelope, faChild, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { SocialAuthService } from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  faLock=faLock;
  faUser=faUser;
  faEnvelope=faEnvelope;
  faChild=faChild;
  user: any;
  loggedIn: any;
  wrong: any;
  eye = faEye;
  eyeSlash = faEyeSlash;
  hide: boolean = true;
  visible: boolean = true;

  constructor(private authService:AuthServiceService,private router: Router, private authService2: SocialAuthService){}

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  })

  get name(){return this.registerForm.get('name')}
  get email(){return this.registerForm.get('email')}
  get age(){return this.registerForm.get('age')}
  get username(){return this.registerForm.get('username')}
  get password(){return this.registerForm.get('password')}

  onRegister(){
    console.warn(this.registerForm.value);
    if(this.registerForm.valid){
      this.authService.register(this.registerForm.value).subscribe((result)=>{
          this.router.navigate(['/questionnaire']);
      },(error)=>{
        this.wrong = true;
        console.log("User Not Registerd");})
    }
    
  }

  ngOnInit(): void {


    localStorage.setItem('movieId',JSON.stringify({mname:550}));
    localStorage.setItem('tvId',JSON.stringify({mname:1399}));

    this.authService2.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      var username = this.user.email.split("@",1)[0];

     var registerWithGoogle = new Object
    ({
      name: this.user.name,
      email: this.user.email,
      username: username,
      password: username,
      age:21 
    })
    console.log(registerWithGoogle);
    console.log(this.registerForm.value);
    this.authService.register(registerWithGoogle).subscribe((result)=>{
      this.router.navigate(['/questionnaire']);
  },(error)=>{
      this.wrong = true;
    console.log("User Not Registerd");})
    });
  }

  myFunction() {
    this.hide = !this.hide;
    this.visible = !this.visible;
  }
  
}

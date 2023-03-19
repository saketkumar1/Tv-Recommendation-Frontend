import { GetUserDataService } from './../../service/get-user-data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AuthServiceService } from 'src/app/auth-service.service';
import { FacebookLoginProvider, SocialAuthService } from "@abacritt/angularx-social-login";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  wrong: any;
  faLock = faLock;
  faUser = faUser;
  eye = faEye;
  eyeSlash = faEyeSlash;
  hide: boolean = true;
  visible: boolean = true;
  user: any;
  loggedIn: any;

  constructor(private authService: AuthServiceService,
    private router: Router, private authService2: SocialAuthService,
    private userdataservice: GetUserDataService) { }
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  })

  get username() { return this.loginForm.get('username') }

  get password() { return this.loginForm.get('password') }

  onLogin() {

    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe((result) => {
        console.log(result.jwtToken);

        this.router.navigate(['/browse']);

      }, (error) => {
        this.wrong = true;
        console.log("User Not Found");
      })
    }
  }


  ngOnInit(): void {

    

    this.authService2.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      var username = this.user.email.split("@", 1)[0];

      var loginWithGoogle = new Object
        ({
          username: username,
          password: username
        })

      console.log(loginWithGoogle);

      this.authService.login(loginWithGoogle).subscribe((result) => {
        this.router.navigate(['/browse']);
      }, (error) => {
        this.wrong = true;
        console.log("User Not Found");
      })
    });

  }

  myFunction() {
    this.hide = !this.hide;
    this.visible = !this.visible;
  }
}

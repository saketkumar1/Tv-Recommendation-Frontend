import { Component, OnInit } from '@angular/core';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userIcon=faUser; 
  searchIcon= faSearch;
  constructor(private authService: SocialAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
      this.authService.signOut();
      this.router.navigate(['/login']);
      localStorage.removeItem('currentUser');
  }

}

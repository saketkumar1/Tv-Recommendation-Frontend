import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  facebook = faFacebook;
  twitter= faTwitter;
  youtube= faYoutube;
  insta=faInstagram;
  constructor() { }

  ngOnInit(): void {
  }

}

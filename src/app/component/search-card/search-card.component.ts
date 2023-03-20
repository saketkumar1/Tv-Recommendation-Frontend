import { Component, Input, OnInit } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent implements OnInit {

  @Input() searchVal: any;
  playIcon = faPlay;
  
  constructor() { }

  ngOnInit(): void {
  }

}

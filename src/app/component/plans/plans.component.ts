import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  
  check=faCheck;
  handler:any = null; 
  logoPoster:any
  results=[
    {
      id:1,
      name:'Silver',
      price:'99',
      ott:['Zee5','Voot']
    },
    {
      id:2,
      name:'Gold',
      price:'199',
      ott:['Hotstar','Prime']
    
    },
    {
      id:3,
      name:'Platinum',
      price:'299',
      ott:['Netflix','Prime','Voot']
    }
  ]


  ngOnInit(): void {

  }

public hideRuleContent=[false, true,true];


toggle(id:number) {
  
      for (let i = 0; i < this.hideRuleContent.length; i++) {
      if(i==id){
        this.hideRuleContent[i] = false;
      }else{
        this.hideRuleContent[i] = true;
      }
      
    }

}

  constructor(private http:HttpClient) { }


  getPoster(ott:any){

    var map = new Map();  
    map.set('Netflix', '/t2yyOv40HZeVlLjYsCsPHnWLk4W.jpg');
    map.set('Prime', '/emthp39XA2YScoYL1p0sdbAH2WA.jpg');
    map.set('Hotstar', '/dpm29atq9clfBL38NgGxsj2CCe3.jpg');
    map.set('Zee5', '/ajbCmwvZ8HiePHZaOVEgm9MzyuA.jpg');
    map.set('Voot', '/2u1uElmpm4lProS7C9RYcaYLYt1.jpg');

    return map.get(ott);
  }
}

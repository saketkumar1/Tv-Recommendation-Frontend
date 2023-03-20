import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';
import { GetUserDataService } from 'src/app/service/get-user-data.service';


export class PlanModel {
  userId: number | undefined;
  movieId: number | undefined;
  noOfDays: number|undefined;
  price:number | undefined;
  planName:String | undefined;
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})


export class PaymentComponent implements OnInit {

  userId:any;
  id:any;

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


  @Input() plansVal: any;
  @Input() tryVal:any;

  constructor(public authService: AuthServiceService,
     private route: ActivatedRoute, 
     private http: HttpClient, 
     private userDataservice: GetUserDataService, 
     private router: Router,
     private _snackBar: MatSnackBar) { 

      this.id = this.route.snapshot.paramMap.get('id');
     }

  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('userId') + "").id
  }


  objet:any;
  onConfirm(){

    
    for( var temp of this.results){
      if(temp.id==this.id){
        this.objet=temp;
        break;
      }
    }


    const planmodel = new PlanModel();
    planmodel.userId = this.userId;
    planmodel.movieId = 10;
    planmodel.noOfDays=30;
    planmodel.price=this.objet.price;
    planmodel.planName=this.objet.name;

    console.log(planmodel);
    
    this.authService.postPlan(planmodel).subscribe((result) =>{
      this._snackBar.open('Plan Added Successfully', 'Close', {
        duration: 3000
      });

      console.log("Plan added Successfully");
      this.router.navigate(['/browse']);
    })

  

  }

}

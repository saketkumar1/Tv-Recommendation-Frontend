import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }
  userId:any;
  

  login(data:any):Observable<any>{
    console.log("I am server");
    localStorage.setItem('currentUser',JSON.stringify({name:data.username}));

    return this.http.post( `https://tv-recommendation-hub-backend-urtjok3rza-wl.a.run.app/authenticate`, data);
  }

  register(data:any):Observable<any>{
    localStorage.setItem('currentUser',JSON.stringify({name:data.username}));

    return this.http.post(`https://tv-recommendation-hub-backend-urtjok3rza-wl.a.run.app/api/users/createUser`, data);
  }

  changes(data:any):Observable<any>{
    this.userId=JSON.parse(localStorage.getItem('userId')+"").id

    return this.http.put(`https://tv-recommendation-hub-backend-urtjok3rza-wl.a.run.app/api/users/${this.userId}`, data);
  }

  remove(historyId:any):Observable<any>{
    
    return this.http.delete(`https://tv-recommendation-hub-backend-urtjok3rza-wl.a.run.app/history/`+ historyId);
  }

  postPlan(data:any):Observable<any>{
    return this.http.post(`https://tv-recommendation-hub-backend-urtjok3rza-wl.a.run.app/subs/add`, data);
  }

  removePlan(subsId:any){
    // console.log("trying to remove plan");
    return this.http.delete(`https://tv-recommendation-hub-backend-urtjok3rza-wl.a.run.app/subs/remove/`+ subsId);

  }
}

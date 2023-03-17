import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetUserDataService {

  constructor(private http:HttpClient) { }

  mail:any;
  
  getUserId(name:string) {
    return this.http.get('https://tv-recommendation-hub-backend-urtjok3rza-wl.a.run.app/api/users/getUserId/'+name);
  }

  getUserData(id:any){
    return this.http.get('https://tv-recommendation-hub-backend-urtjok3rza-wl.a.run.app/api/users/'+id)
  }

  getUserHistory(id:any){
    return this.http.get('https://tv-recommendation-hub-backend-urtjok3rza-wl.a.run.app/history/'+id);
  }

  generate(data:any){
    return this.http.post('https://tv-recommendation-hub-backend-urtjok3rza-wl.a.run.app/api/users/sendOTP',data.email);
  }

  updatePassword(data:any){
    this.mail = JSON.parse(localStorage.getItem('mail')+"")['mail'];
    return this.http.put(`https://tv-recommendation-hub-backend-urtjok3rza-wl.a.run.app/api/users/updatePassword/${this.mail}`, data.password)
  }

  getSubsHistory(id:any){
    console.log("Getting plan");
    return this.http.get('https://tv-recommendation-hub-backend-urtjok3rza-wl.a.run.app/subs/'+id);

  }
}

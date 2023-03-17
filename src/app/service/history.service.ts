import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http:HttpClient) { }

  mail:any;
  
  postHistory(data:any) {
    return this.http.post('https://tv-recommendation-hub-backend-urtjok3rza-wl.a.run.app/history/',data);
  }

}

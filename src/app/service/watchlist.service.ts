import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  constructor(private http: HttpClient) { }

  getWatchlist() {
    return this.http.get('https://tv-recommendation-hub-backend-urtjok3rza-wl.a.run.app/api/watchlist/');
  }

  PostWatchlist(data: any) {
    return this.http.post('https://tv-recommendation-hub-backend-urtjok3rza-wl.a.run.app/api/watchlist/', data);
  }

  getWatchlistsize(id:number) {
    return this.http.get('https://tv-recommendation-hub-backend-urtjok3rza-wl.a.run.app/api/watchlist/getSize/'+id);
  }

  deleteWatchList(id: number) {
    return this.http.delete('https://tv-recommendation-hub-backend-urtjok3rza-wl.a.run.app/api/watchlist/' + id);
  }
}



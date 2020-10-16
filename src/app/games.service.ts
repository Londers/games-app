import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  getGames(){
    return this.http.get('/assets/data.json');
  }
}

import {Injectable} from '@angular/core';

import json from '../assets/data.json';

@Injectable({
  providedIn: 'root'
})

export class GamesService {
  data;
  constructor() {this.data = json as DataInterface; }

  getGames(): [Game]{
    return this.data.games;
  }
}

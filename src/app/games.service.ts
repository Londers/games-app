import {Injectable} from '@angular/core';

import json from '../assets/data.json';

@Injectable({
  providedIn: 'root'
})

export class GamesService {
  data: DataInterface;

  constructor() {
    this.data = json as unknown as DataInterface;
    console.log(this.data);
  }

  getMerchants(): Merchant[] {
    const merchantsArray: Merchant[] = [];
    for (const key in this.data.merchants) {
      if (this.data.merchants.hasOwnProperty(key)) {
        merchantsArray.push(this.data.merchants[key]);
      }
    }
    return merchantsArray.sort(this.sortMerchantsByName);
  }

  getGames(): [Game] {
    return this.data.games.sort(this.sortGamesByName);
  }

  sortGamesByName(a: Game, b: Game): number {
    if (a.Name.en < b.Name.en) {
      return -1;
    }
    if (a.Name.en > b.Name.en) {
      return 1;
    }
    return 0;
  }

  sortMerchantsByName(a: Merchant, b: Merchant): number {
    if (a.Name < b.Name) {
      return -1;
    }
    if (a.Name > b.Name) {
      return 1;
    }
    return 0;
  }
}

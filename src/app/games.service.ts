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

  getCategories(): Category[] {
    this.data.categories = this.data.categories.sort(this.sortByName);
    const favorites = this.getFavorites();
    if (favorites.length !== 0) {
      this.data.categories.unshift({ID: '777', Name: {en: 'Favorites'}});
    }
    return this.data.categories;
  }

  getFavorites(): string[] {
    let favorites = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key: any = localStorage.key(i);
      const value: any = localStorage.getItem(key);
      if ((key === 'favorites') && (value.length !== 0)) {
        favorites = (JSON.parse(value));
      }
    }
    return favorites;
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
    return this.data.games.sort(this.sortByName);
  }

  sortByName(a: Game | Category, b: Game | Category): number {
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

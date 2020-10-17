import {Injectable} from '@angular/core';
import {GamesService} from './games.service';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  sortedGames: Game[];
  merchantsArray: Merchant[];

  constructor(private gamesService: GamesService) {
    this.sortedGames = gamesService.getGames();
    this.merchantsArray = gamesService.getMerchants();
  }

  getMerchants(): Merchant[] {
    return this.merchantsArray;
  }

  getGames(): Game[] {
    return this.sortedGames;
  }

  findGames(find: string): Game[] {
    return this.sortedGames.filter((game) => {
      return game.Name.en.toLocaleLowerCase().includes(find.toLocaleLowerCase());
    });
  }

  findGamesByMerchant(selectedMerchants: string[]): Game[] {
    // console.log('111111');
    return this.sortedGames.filter((game) => {
      return (selectedMerchants.includes(game.MerchantID));
    });
  }
}

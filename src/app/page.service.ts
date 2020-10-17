import {Injectable} from '@angular/core';
import {GamesService} from './games.service';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private readonly categories: Category[];
  private readonly sortedGames: Game[];
  private readonly merchantsArray: Merchant[];
  selectedCategories: string[];
  gamesFilter: string;
  selectedMerchants: string[];
  favoriteGames: Game[];

  constructor(private gamesService: GamesService) {
    this.categories = gamesService.getCategories();
    this.sortedGames = gamesService.getGames();
    this.merchantsArray = gamesService.getMerchants();
    this.selectedCategories = [];
    this.gamesFilter = '';
    this.selectedMerchants = [];
    this.favoriteGames = this.getGamesByIDs(localStorage.getItem('favorites'));
  }

  getTotalGamesCount(): number {
    return this.sortedGames.length;
  }

  getFilteredGamesCount(): number {
    return this.getFilteredGames.length;
  }

  get getCategories(): Category[] {
    return this.categories;
  }

  get getMerchants(): Merchant[] {
    return this.merchantsArray;
  }

  get getGames(): Game[] {
    return this.sortedGames;
  }

  get getFilteredGames(): Game[] {
    const arr = [
      this.findGamesByName(this.gamesFilter),
      this.findGamesByCategories(this.selectedCategories),
      this.findGamesByMerchant(this.selectedMerchants)
    ];
    const filteredGames = arr.reduce((p, c) => p.filter(e => c.includes(e)));
    this.favoriteGames = this.getGamesByIDs(localStorage.getItem('favorites'));
    this.favoriteGames.forEach((game) => {
      if (filteredGames.includes(game)) {
        filteredGames.splice(filteredGames.indexOf(game), 1);
        filteredGames.unshift(game);
      }
    });
    return filteredGames;
  }

  findGamesByCategories(selectedCategories: string[]): Game[] {
    this.selectedCategories = selectedCategories;
    if (selectedCategories.length === 0) {
      return this.sortedGames;
    }
    const filteredGames = this.sortedGames.filter((game) => {
      return (selectedCategories.some(catID => game.CategoryID[0].indexOf(catID) >= 0));
    });
    if ((this.selectedCategories.includes('777')) && (this.sortedGames.filter((game) => {
      return (this.gamesService.getFavorites().some(ID => ID === game.ID));
    }))) {
      this.getGamesByIDs(localStorage.getItem('favorites')).forEach((favorite: Game) => {
        filteredGames.unshift(favorite);
      });
    }
    return filteredGames;
  }

  findGamesByName(find: string): Game[] {
    this.gamesFilter = find;
    if (find.length === 0) {
      return this.sortedGames;
    }
    return this.sortedGames.filter((game) => {
      return game.Name.en.toLocaleLowerCase().includes(find.toLocaleLowerCase());
    });
  }

  getGamesByIDs(find: string | null): Game[] {
    const returnArray = [] as Game[];
    if (find !== null) {
      const favoritesArray = JSON.parse(find);
      favoritesArray.forEach((favorite: string) => {
        returnArray.push(this.sortedGames.find(game => {
          return game.ID === favorite;
        }) as Game);
      });
    }
    return returnArray;
  }

  findGamesByMerchant(selectedMerchants: string[]): Game[] {
    this.selectedMerchants = selectedMerchants;
    if (selectedMerchants.length === 0) {
      return this.sortedGames;
    }
    return this.sortedGames.filter((game) => {
      return (selectedMerchants.includes(game.MerchantID));
    });
  }

}

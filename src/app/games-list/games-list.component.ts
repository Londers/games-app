import {Component, OnInit} from '@angular/core';

import {GamesService} from '../games.service';

function sortByName(a: Game, b: Game): number{
  if (a.Name.en < b.Name.en) {
    return -1;
  }
  if (a.Name.en > b.Name.en) {
    return 1;
  }
  return 0;
}

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.sass']
})
export class GamesListComponent implements OnInit {
  sortedGames: Game[];
  slicedGames: Game[];
  currentPage = 0;
  displayQuantity = 20;

  constructor(private gamesService: GamesService) {
    this.sortedGames = this.gamesService.getGames().sort(sortByName);
    this.slicedGames = this.sortedGames.slice(this.currentPage, this.currentPage + this.displayQuantity);
  }

  ngOnInit(): void {
  }

  shit(): void {
    console.log(this.sortedGames);
  }

  nextGames(): void{
    this.currentPage += this.displayQuantity;
    this.slicedGames = this.sortedGames.slice(this.currentPage, this.currentPage + this.displayQuantity);
  }
}

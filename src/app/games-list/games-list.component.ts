import {Component, OnInit} from '@angular/core';

// import { games } from '../games';
import {GamesService} from '../games.service';

// function sortByName(a: namespace.game, b: namespace.game): number {
// tslint:disable-next-line:typedef
function sortByName(a, b) {
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
  sortedGames;
  slicedGames;

  constructor(private gamesService: GamesService) {
  }

  ngOnInit(): void {
    this.gamesService.getGames().subscribe(res => {
      // @ts-ignore
      this.sortedGames = res.games.sort(sortByName);
      this.slicedGames = this.sortedGames.slice(0, 20);
    });

  }

  shit(): void {
    console.log(this.sortedGames);
  }
}

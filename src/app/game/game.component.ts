import {Component, OnInit, Output} from '@angular/core';
import {Input} from '@angular/core';

import {GamesService} from '../games.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {
  @Input() game: Game;
  slicedGames: Game[] | undefined;
  active = false;
  width: number;

  constructor(private gameService: GamesService) {
    this.game = {} as Game;
  }

  ngOnInit(): void {
  }

  setActive(value: boolean): void {
    this.active = value;
  }

  isActive(): boolean {
    return this.active;
  }

  isFavorite(): boolean {
    return this.gameService.getFavorites().includes(this.game.ID);
  }

  play(): void {
    alert('You will play ' + this.game?.Name.en);
  }

  addToFavorites(): void {
    const favorites = this.gameService.getFavorites();
    favorites.push(this.game?.ID);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  deleteFromFavorites(): void {
    const favorites = this.gameService.getFavorites();
    favorites.splice(favorites.indexOf(this.game.ID), 1);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}

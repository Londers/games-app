import {Component, OnInit, Output} from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {
  @Input() game: Game;
  slicedGames: Game[] | undefined;
  active = false;

  constructor() {this.game = {} as Game;
  }

  ngOnInit(): void {
  }

  setActive(value: boolean): void {
    this.active = value;
  }

  isActive(): boolean {
    return this.active;
  }

  play(): void {
    alert('You will play ' + this.game?.Name.en);
  }
}

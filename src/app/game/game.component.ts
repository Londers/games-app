import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {
  @Input() game: Game | undefined;
  active = false;

  constructor() {
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

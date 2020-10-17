import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.sass']
})
export class GamesListComponent implements OnInit {
  @Input() slicedGames: Game[];

  constructor() {
    this.slicedGames = [];
  }

  ngOnInit(): void {
  }
}

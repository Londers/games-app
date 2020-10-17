import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.sass']
})
export class PageHeaderComponent implements OnInit {
  @Input() totalGamesCount: number;
  @Input() filteredGamesCount: number;

  constructor() {
    this.totalGamesCount = 0;
    this.filteredGamesCount = 0;
  }

  ngOnInit(): void {
  }

}

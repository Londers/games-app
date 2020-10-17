import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core';

import {GamesService} from '../games.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.sass']
})
export class GamesListComponent implements OnInit {
  // @Input() offset = 0;
  // @Input() limit = 20;
  // @Input() size = 1;
  // @Input() range = 3;
  // sortedGames: Game[];
  // slicedGames: Game[];
  // currentPage: number;
  // totalPages: number;
  // pages: Observable<number[]>;
  @Input() slicedGames: Game[];
  // @Input() offset = 0;
  // @Input() limit = 20;
  // @Input() size = 1;
  // @Input() range = 3;

  constructor() { // private gamesService: GamesService) {
    this.slicedGames = [];
    // this.sortedGames = this.gamesService.getGames().sort(sortByName);
    // this.size = this.sortedGames.length;
    // this.slicedGames = this.sortedGames.slice(this.offset, this.offset + this.limit);
  }

  // shit(): void {
  //   console.log(this.sortedGames);
  // }
  //
  // nextGames(): void {
  //   this.offset += this.limit;
  //   this.slicedGames = this.sortedGames.slice(this.offset, this.offset + this.limit);
  // }
  //
  // getPages(offset: number, limit: number, size: number): void {
  //   this.currentPage = this.getCurrentPage(offset, limit);
  //   this.totalPages = this.getTotalPages(limit, size);
  //   this.pages = Observable.range(-this.range, this.range * 2 + 1)
  //     .map(offset => this.currentPage + offset)
  //     .filter(page => this.isValidPageNumber(page, this.totalPages))
  //     .toArray();
  // }
  //
  // getCurrentPage(offset: number, limit: number): number {
  //   return Math.floor(offset / limit) + 1;
  // }
  //
  // getTotalPages(limit: number, size: number): number {
  //   return Math.ceil(Math.max(size, 1) / Math.max(limit, 1));
  // }
  //
  // isValidPageNumber(page: number, totalPages: number): boolean {
  //   return page > 0 && page <= totalPages;
  // }
  //
  ngOnInit(): void {
    // this.getPages(this.offset, this.limit, this.size);
  }

  //
  // ngOnChanges(): void {
  //   this.getPages(this.offset, this.limit, this.size);
  // }

}

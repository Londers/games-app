import {Component, OnInit} from '@angular/core';

import {PageService} from '../page.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.sass']
})
export class PageComponent implements OnInit {
  offset = 0;
  limit = 20;
  size = 1;
  sortedGames: Game[];
  slicedGames: Game[];
  limitValues = [20, 40, 60];
  checkoutForm: any;
  merchants: Merchant[];

  constructor(private pageService: PageService,
              private formBuilder: FormBuilder) {
    this.sortedGames = this.pageService.getGames();
    this.size = this.sortedGames.length;
    this.slicedGames = this.sortedGames.slice(this.offset, this.offset + this.limit);
    this.checkoutForm = this.formBuilder.group({
      search: ''
    });
    this.merchants = pageService.getMerchants();
  }

  ngOnInit(): void {
  }

  changeMerchants(merchants: {
    [id: string]: { label: string };
  }): void {
    const selectedMerchantIDs = [];
    for (const key in merchants) {
      if (merchants.hasOwnProperty(key)) {
        selectedMerchantIDs.push(this.findMerchantID(merchants[key].label));
      }
    }
    this.sortedGames = this.pageService.findGamesByMerchant(selectedMerchantIDs);
    this.reloadList();
  }

  findMerchantID(name: string): string {
    let merchantID = '-1';
    this.merchants.forEach(merchant => {
      if (merchant.Name === name) {
        merchantID = merchant.ID;
      }
    });
    return merchantID;
  }

  reloadList(): void {
    this.slicedGames = this.sortedGames.slice(this.offset, this.offset + this.limit);
  }

  previousGames(): void {
    this.offset -= this.limit;
    this.reloadList();
    window.scrollTo(0, 0);
  }

  nextGames(): void {
    this.offset += this.limit;
    this.reloadList();
    window.scrollTo(0, 0);
  }

  onLimitChange(event: number): void {
    this.limit = event;
    this.reloadList();
  }

  onSearch(searchValue: string): void {
    this.sortedGames = this.pageService.findGames(searchValue);
    this.reloadList();
  }
}

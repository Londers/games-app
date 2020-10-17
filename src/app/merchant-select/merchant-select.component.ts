import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-merchant-select',
  templateUrl: './merchant-select.component.html',
  styleUrls: ['./merchant-select.component.sass']
})
export class MerchantSelectComponent implements OnInit {
  @Input() merchants: Merchant[];
  selectedMerchants: string[];
  @Output() changeMerchants = new EventEmitter();
  usersSelected = [];

  constructor() {
    this.merchants = [];
    this.selectedMerchants = [];
  }

  ngOnInit(): void {
  }

  uncheckAll(): void {
    this.usersSelected = [];
  }
}

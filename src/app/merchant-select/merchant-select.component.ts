import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

// import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-merchant-select',
  templateUrl: './merchant-select.component.html',
  styleUrls: ['./merchant-select.component.sass']
})
export class MerchantSelectComponent implements OnInit {
  @Input() merchants: Merchant[];
  selectedMerchants: string[];
  @Output() changeMerchants = new EventEmitter();
  // merchantsControl = new FormControl();

  constructor() {
    this.merchants = [];
    this.selectedMerchants = [];
  }

  onChange(selected: string): void {

  }

  ngOnInit(): void {
  }

}

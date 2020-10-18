import {Component, Input, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.sass']
})
export class CategorySelectComponent implements OnInit {
  @Input() categories: Category[];
  selectedCategories: string[];
  @Output() changeCategories = new EventEmitter();
  usersSelected = [];

  constructor() {
    this.categories = [];
    this.selectedCategories = [];
  }

  ngOnInit(): void {
  }

  uncheckAll(): void {
    this.usersSelected = [];
  }

}

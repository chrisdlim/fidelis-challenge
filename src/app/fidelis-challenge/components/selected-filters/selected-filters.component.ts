import { AlertFilter } from './../../interfaces/alert.interface';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'selected-filters',
  templateUrl: './selected-filters.component.html',
  styleUrls: ['./selected-filters.component.scss']
})
export class SelectedFiltersComponent implements OnChanges {

  @Input() filters: AlertFilter;
  @Output() resetFiltersEmitter = new EventEmitter();

  selectedFilters: { [k: string]: string }[];

  constructor() { }

  ngOnChanges() {
    this.setSelectedFilters();
  }

  setSelectedFilters() {
    this.selectedFilters = Object.keys(this.filters).reduce((acc, curr) => {
      return acc.concat([`${curr} = ${this.filters[curr]}`])
    }, []);
  }

  resetFilters() {
    this.resetFiltersEmitter.emit();
  }

}

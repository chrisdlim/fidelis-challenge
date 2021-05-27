import { FilterTypes, AlertFilter } from './../../interfaces/alert.interface';
import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Alert } from '../../interfaces/alert.interface';
@Component({
  selector: 'alert-filter',
  templateUrl: './alert-filter.component.html',
  styleUrls: ['./alert-filter.component.scss']
})
export class AlertFilterComponent implements OnChanges {

  @Input() filterType: FilterTypes;
  @Input() alerts: Alert[];
  @Input() filters: AlertFilter;
  @Output() filterSelectedEmitter = new EventEmitter();

  filteredData: Alert[];
  displayData: {
    filter: string;
    value: number;
  }[];

  constructor() { }

  ngOnChanges(): void {
    this.getFilteredAlerts();
  }

  getFilteredAlerts() {
    const filterKeys = Object.keys(this.filters);
    if (filterKeys.length) {
      this.filteredData = this.alerts.filter(alert => {
        for (const filter in this.filters) {
          if (alert[filter] !== this.filters[filter]) {
            return false; // Return False early if an alert fails to pass at least one filter
          }
        }
        return true;
      });
    } else {
      this.filteredData = this.alerts; // No filters, so let's just get display data for all alerts
    }
    this.displayData = this.getDisplayedCounts(this.filteredData);
  }

  /**
   * @description Arrange data into an array of objects with counts for each filter value
   * @param data
   * @returns
   */
  getDisplayedCounts(data: Alert[]) {
    // Put filters into a keyvalue map where { filter: count }
    const countingMap = data.reduce((acc, curr) => {
      if (!acc[curr[this.filterType]]) acc[curr[this.filterType]] = 0;
      acc[curr[this.filterType]]++;
      return acc;
    }, {});

    // Convert map into an array of just kv pairs
    return Object.keys(countingMap)
      .map((k: string) => ({ filter: k, value: countingMap[k] }))
        .sort((a, b) => b.value - a.value);
  }

  emitFilter(filterValue: string) {
    this.filterSelectedEmitter.emit({
      filterType: this.filterType,
      filterValue,
      totalAlerts: this.displayData.find(o => o.filter === filterValue).value, // total Alerts will always be the most recent filter selected
    });
  }
}

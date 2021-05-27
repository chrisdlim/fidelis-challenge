import { AlertFilter, FilterTypes } from './../../interfaces/alert.interface';
import { AlertService } from './../../services/alert.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Alert } from '../../interfaces/alert.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit, OnDestroy {

  constructor(private alertService: AlertService) { }

  FilterTypes = FilterTypes;
  subscriptions: Subscription[] = [];
  alerts: Alert[] = [];
  filters: AlertFilter = {}
  selectedFilters: any[] = [];
  totalAlerts: number;

  ngOnInit() {
    this.getAlerts();
  }

  getAlerts() {
    this.alertService.getAlerts().subscribe(data => {
      this.alerts = data;
      this.totalAlerts = this.alerts.length;
    });
  }

  handleFilterSelection(filterEvent: { filterType: string, filterValue: string, totalAlerts: number }) {
    const { filterType, filterValue, totalAlerts } = filterEvent;
    this.filters = {
      ...this.filters,
      [filterType]: filterValue,
    }
    this.totalAlerts = totalAlerts
  }

  handleFilterReset() {
    this.filters = {};
    this.totalAlerts = this.alerts.length;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}

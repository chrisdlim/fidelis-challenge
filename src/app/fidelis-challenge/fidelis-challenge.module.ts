import { AlertFilterComponent } from './components/alert-filter/alert-filter.component';
import { AlertService } from './services/alert.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FidelisChallengeRoutingModule } from './fidelis-challenge-routing.module';
import { AlertsComponent } from './components/alerts/alerts.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectedFiltersComponent } from './components/selected-filters/selected-filters.component';

@NgModule({
  declarations: [
    AlertsComponent,
    AlertFilterComponent,
    SelectedFiltersComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FidelisChallengeRoutingModule,
  ],
  providers: [AlertService]
})
export class FidelisChallengeModule { }

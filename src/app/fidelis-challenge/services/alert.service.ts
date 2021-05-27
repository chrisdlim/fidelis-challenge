import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/assets/config';
import { Alert } from '../interfaces/alert.interface';

@Injectable({ providedIn: 'root' })
export class AlertService {

  constructor(private http: HttpClient) { }

  getAlerts(): Observable<Alert[]> {
    return this.http.get<Alert[]>(environment.alertsEndpoint);
  }
}

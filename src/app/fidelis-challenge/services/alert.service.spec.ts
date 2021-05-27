import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AlertService } from './alert.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AlertService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient]
    })
  });

  it('should be created', () => {
    const service: AlertService = TestBed.get(AlertService);
    expect(service).toBeTruthy();
  });
});

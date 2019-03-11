import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import { IndicatorService } from './services/indicator.service';
import { CalculatedIndicator } from './models/calculated-indicator';
import { REQUEST_INTERVAL } from './other/constants';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private indicatorService: IndicatorService) { }

  data: CalculatedIndicator[];
  errorMessage: string;
  private subscription: Subscription;


  errorHandler(err :  HttpErrorResponse) : void {
    this.data = [];
    if (err instanceof Error)
      this.errorMessage = err.message;
    else
      if (err.status === 0)
        this.errorMessage = "Потеряна связь с сервером.";
      else
        this.errorMessage = err.status + ' ' + err.statusText;
      
  }

  getData() : void {
    this.indicatorService.getIndicators()
      .subscribe((res) => {
        this.data = res;
        this.errorMessage = '';
      },
        (err) => this.errorHandler(err));

  }

  ngOnInit() {
    this.subscription = TimerObservable.create(0, REQUEST_INTERVAL)
      .subscribe(() => this.getData());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

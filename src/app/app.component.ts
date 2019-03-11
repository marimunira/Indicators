import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimerObservable } from "rxjs/observable/TimerObservable";
import { Subscription } from "rxjs";

import { IndicatorService } from "./services/indicator.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor( private indicatorService: IndicatorService){}

  data =[];
  errorMessage : String;
  private subscription: Subscription;
  REQUEST_INTERVAL = 10000;

  errorHandler(err) {
    console.log(err);
    this.data = [];
    if (err.hasOwnProperty('status'))
        if (err.status === 0)
          this.errorMessage = "Потеряна связь с сервером.";
        else 
          this.errorMessage = err.status + ' ' + err.statusText;
    else
      this.errorMessage = err.message;
  }

  getData() { 
    this.indicatorService.getIndicators()
        .subscribe((res) => {
          this.data = res;
          this.errorMessage = '';
          console.log(this.data[0])
        },
                  (err) => this.errorHandler(err));
    
  }

  ngOnInit() {
    this.subscription = TimerObservable.create(0, this.REQUEST_INTERVAL)
          .subscribe(() => this.getData());
    /*this.getData();*/
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

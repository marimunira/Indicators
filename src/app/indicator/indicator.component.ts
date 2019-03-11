import { Component, Input, OnInit } from '@angular/core';

import { CalculatedIndicator } from '../models/calculated-indicator';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css']
})

export class IndicatorComponent implements OnInit {
  @Input() data: CalculatedIndicator;
  constructor() { }

  ngOnInit() {
  }

  hasWarning(): string {
    return this.data.percentage != 1 && this.data.percentage != 0 ?
      'value underline-success' :
      'value underline-warning';
  }

}

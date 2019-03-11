import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css']
})

export class IndicatorComponent implements OnInit {
@Input() data;
  constructor() { }

  ngOnInit() {
  }

  hasWarning()
  {
    return this.data.percentage!=1 && this.data.percentage!=0 ? 
                'value underline-success' : 
                'value underline-warning';
  }

}

import { Component, Input, OnInit} from '@angular/core';
import { Indicator } from "../models/indicator"
@Component({
  selector: 'app-tower',
  templateUrl: './tower.component.html',
  styleUrls: ['./tower.component.css']
})

export class TowerComponent implements OnInit {
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

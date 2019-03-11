import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']

})
export class ProgressBarComponent implements OnInit {
  @Input() progress: number;

  constructor() { }

  ngOnInit() {
  }
  
  hasWarning(): string {
    return this.progress < 1 && this.progress > 0 ?
      'progress-success' :
      'progress-warning';
  }

}

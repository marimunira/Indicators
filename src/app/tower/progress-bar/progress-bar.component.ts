import { Component,
  Directive,
   OnInit,
   OnChanges,
   Input,
   ElementRef,
   HostBinding } from '@angular/core';
import { 
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes 
} from '@angular/animations';


@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']

})
export class ProgressBarComponent implements OnInit {
  @Input() progress: number;

  constructor(private element: ElementRef) { }

 
  ngOnInit() {

  }


}

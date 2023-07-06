import {Component, Input} from '@angular/core';
import {feedback} from '../../interfaces/data';

@Component({
  selector: 'app-feedback-item',
  templateUrl: './feedback-item.component.html',
  styleUrls: ['./feedback-item.component.scss']
})
export class FeedbackItemComponent {

  @Input() feedback!: feedback;
}

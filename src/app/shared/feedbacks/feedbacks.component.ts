import {Component, Input, OnInit} from '@angular/core';
import {feedback} from '../../interfaces/data';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss']
})
export class FeedbacksComponent implements OnInit{

  @Input() feedbacks!: feedback[];

  // Public
  currentFeedback!: feedback;

  ngOnInit() {
    this.currentFeedback = this.feedbacks[0]
  }
}

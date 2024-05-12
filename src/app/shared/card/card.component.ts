import {Component, EventEmitter, Input, Output} from '@angular/core';
import {localize} from '../../localizer/eng';
import {project} from '../../interfaces/data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() card!: project;

  @Output() cardClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  protected readonly localize = localize;
}

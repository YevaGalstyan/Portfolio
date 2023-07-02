import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() cardHeader!: string
  @Input() cardInfo!: string

  @Input() imgUrl!: string

  @Output() cardClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
}

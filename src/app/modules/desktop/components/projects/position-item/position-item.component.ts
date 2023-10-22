import {Component, Input} from '@angular/core';
import {position} from '../../../../../interfaces/data';

@Component({
  selector: 'app-position-item',
  templateUrl: './position-item.component.html',
  styleUrls: ['./position-item.component.scss']
})
export class PositionItemComponent {

  @Input() position!: position
}

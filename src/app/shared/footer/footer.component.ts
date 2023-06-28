import { Component } from '@angular/core';
import {LocalizeService} from '../../localizer/localize.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(public readonly localize: LocalizeService) {
  }
}

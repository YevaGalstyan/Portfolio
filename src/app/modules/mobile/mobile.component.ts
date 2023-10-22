import { Component } from '@angular/core';
import {LocalizeService} from '../../localizer/localize.service';

@Component({
  selector: 'app-mobile',
  template: `
    <div class="under_construction">
      <img width="100px" alt="" src="assets/images/icons/coffee.svg">
      <div style="display: flex; flex-direction: column">
        <span>{{localize.localize.mobileConstruction}}</span>
        <span>{{localize.localize.accessDesktop}}</span>
      </div>
    </div>`,
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent {

  constructor(public localize: LocalizeService) {
  }
}

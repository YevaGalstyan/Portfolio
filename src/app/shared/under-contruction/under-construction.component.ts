import {Component} from '@angular/core';
import {LocalizeService} from '../../localizer/localize.service';

@Component({
    selector: 'app-under-construction',
    template: `
        <div class="in_progress_block">
            <img width="80px" src="assets/images/icons/coffee.svg">
            <span>{{localize.localize.underConstruction}}</span>
        </div>
    `,
    styles: [
        `.in_progress_block {
          height: 100%;
          width: var(--body-width);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;

          span {
            color: var(--gray-500);
            font-family: "Nunito-Light Sans";
          }
        }`
    ]
})
export class UnderConstructionComponent {
    constructor(public readonly localize: LocalizeService) {
    }
}

import {Component} from '@angular/core';
import {LocalizeService} from '../../localizer/localize.service';

@Component({
    selector: 'app-colophon',
    templateUrl: './colophon.component.html',
    styleUrls: ['./colophon.component.scss']
})
export class ColophonComponent {

    constructor(public readonly localize: LocalizeService) {
    }
}

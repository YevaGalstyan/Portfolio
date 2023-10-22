import {Component} from '@angular/core';
import {LocalizeService} from '../../../../localizer/localize.service';
import {DataService} from '../../../../services/data';

@Component({
    selector: 'app-memberships',
    templateUrl: './memberships.component.html',
    styleUrls: ['./memberships.component.scss']
})
export class MembershipsComponent {

    constructor(public readonly localize: LocalizeService,
                public readonly dataService: DataService) {
    }
}

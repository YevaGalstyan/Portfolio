import {Component} from '@angular/core';
import {LocalizeService} from '../../../../localizer/localize.service';
import {GeneralService} from '../../../../services/general.service';
import {DataService} from '../../../../services/data';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    constructor(public readonly localize: LocalizeService,
                public readonly dataService: DataService,
                public readonly generalService: GeneralService) {
    }
}

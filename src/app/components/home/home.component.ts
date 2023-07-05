import {Component} from '@angular/core';
import {LocalizeService} from '../../localizer/localize.service';
import {GeneralService} from '../../services/general.service';
import {ProjectsService} from '../../services/projects';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    constructor(public readonly localize: LocalizeService,
                public readonly projects: ProjectsService,
                public readonly generalService: GeneralService) {
    }
}

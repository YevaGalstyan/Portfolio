import {Component} from '@angular/core';
import {LocalizeService} from '../../localizer/localize.service';
import {GeneralService} from '../../services/general.service';
import {DataService} from '../../services/data';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

    constructor(public readonly localize: LocalizeService,
                public readonly dataService: DataService,
                public readonly generalService: GeneralService) {
    }
}

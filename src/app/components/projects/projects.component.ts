import {Component} from '@angular/core';
import {LocalizeService} from '../../localizer/localize.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

    constructor(public readonly localize: LocalizeService) {
    }

    scrollPage(): void {
        window.scrollTo({ top: 700, behavior: 'smooth' });
    }
}

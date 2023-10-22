import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../../../../services/data';
import {localize} from '../../../../../localizer/eng';
import {ILocalize} from '../../../../../localizer/localize';
import {GeneralService} from '../../../../../services/general.service';
import {project} from '../../../../../interfaces/data';

@Component({
    selector: 'app-project-item',
    templateUrl: './project-item.component.html',
    styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

    // Public
    info!: project;

    constructor(private route: ActivatedRoute,
                private generalService: GeneralService,
                private dataService: DataService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const projectId = Number(params['id']);

            // In case no project exists on that id navigate to home page
            if (projectId > this.dataService.projectsDetails.length) {
                this.generalService.navigate('home')
            }

            this.info = this.dataService.projectsDetails[projectId - 1]
        });
    }

    protected readonly localize: ILocalize = localize;
}

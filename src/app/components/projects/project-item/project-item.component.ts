import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {project, ProjectsService} from '../../../services/projects';
import {localize} from '../../../localizer/eng';
import {ILocalize} from '../../../localizer/localize';

@Component({
    selector: 'app-project-item',
    templateUrl: './project-item.component.html',
    styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

    // Public
    info!: project;

    constructor(private route: ActivatedRoute,
                private projectsService: ProjectsService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const projectId = Number(params['id']);
            this.projectsService.projectsDetails.forEach(item => {
                if (projectId === item.id) {
                    this.info = item;
                    return
                }
            })
        });
    }

    protected readonly localize: ILocalize = localize;
}

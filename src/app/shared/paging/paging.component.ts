import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data';
import {LocalizeService} from '../../localizer/localize.service';
import {GeneralService} from '../../services/general.service';
import {ActivatedRoute} from '@angular/router';
import {project} from '../../interfaces/data';

@Component({
    selector: 'app-paging',
    templateUrl: './paging.component.html',
    styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit {

    // Public
    projectId!: number;
    nextProject!: project;

    constructor(public readonly dataService: DataService,
                private route: ActivatedRoute,
                public readonly localize: LocalizeService,
                public readonly generalService: GeneralService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.projectId = Number(params['id']);
            if(this.projectId === this.dataService.projectsDetails.length) {
                this.nextProject = this.dataService.projectsDetails[0]
                this.projectId = 1;
                return
            }
            this.nextProject = this.dataService.projectsDetails[this.projectId];
            this.projectId++;
        });
    }
}

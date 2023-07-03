import {Injectable} from '@angular/core';
import {LocalizeService} from '../../localizer/localize.service';
import {localize} from '../../localizer/eng';

@Injectable({
    providedIn: 'root'
})

export class ProjectsService {

    constructor(private localize: LocalizeService) {
    }

    projects: projects = {
        med: {
            name: this.localize.localize.medControl + ' / МЕД УПРАВЛЕНИЕ',
            date: '2022 ' + this.localize.localize.nov + ' - ' + this.localize.localize.present,
            link: 'https://app.med-upravlenie.ru/'
        },

        imperial: {
            name: this.localize.localize.imperialCapital,
            date: '2021 ' + this.localize.localize.may + ' - ' + '2021 ' + this.localize.localize.sep,
            link: 'https://imperialcg.com/'
        }
    };
}

export interface projects {
    [x: string]: project
}

export interface project {
    name: string
    date: string
    link: string
}
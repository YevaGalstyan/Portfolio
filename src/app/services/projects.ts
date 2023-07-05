import {Injectable} from '@angular/core';
import {LocalizeService} from '../localizer/localize.service';

@Injectable({
    providedIn: 'root'
})

export class ProjectsService {

    constructor(private localize: LocalizeService) {
    }

    projectsDetails: project[] = [
        {
            // Details - inner page
            id: 1,
            name: this.localize.localize.medControl + ' / МЕД УПРАВЛЕНИЕ',
            date: '2022 ' + this.localize.localize.nov + ' - ' + this.localize.localize.present,
            description: this.localize.localize.medControlService,
            imgUrl: 'med.png',
            link: 'https://app.med-upravlenie.ru/',

            // Outer - card information
            cardHeader: this.localize.localize.imperialCapital,
            outerImgUrl: '/projects/trade_small.png',
            cardInfo: this.localize.localize.tradingServiceShort
        },

        {
            // Details - inner page
            id: 2,
            name: this.localize.localize.imperialCapital,
            date: '2021 ' + this.localize.localize.may + ' - ' + '2021 ' + this.localize.localize.sep,
            description: this.localize.localize.tradingService,
            imgUrl: 'trade.png',
            link: 'https://imperialcg.com/',

            // Outer - card information
            cardHeader: this.localize.localize.medControl,
            outerImgUrl: '/projects/med_small.png',
            cardInfo: this.localize.localize.medControlServiceShort
        }
    ]
}

export interface projects {
    [x: string]: project
}

export interface project {
    id: number;
    // Details - inner page
    name: string
    date: string
    link: string
    imgUrl: string
    description: string

    // Outer - card information
    cardHeader: string
    outerImgUrl: string
    cardInfo: string
}
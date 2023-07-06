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
            name: this.localize.localize.medControl + ' / МЕД УПРАВЛЕНИЕ',
            date: '2022 ' + this.localize.localize.nov + ' - ' + this.localize.localize.present,
            description: this.localize.localize.medControlService,
            imgUrls: ['med.png', 'med3.png', 'med1.png', 'med2.png'],
            link: 'https://app.med-upravlenie.ru/',

            // Outer - card information
            cardHeader: this.localize.localize.medControl,
            outerImgUrl: '/projects/med_small.png',
            cardInfo: this.localize.localize.medControlServiceShort
        },

        {
            // Details - inner page
            name: this.localize.localize.imperialCapital,
            date: '2021 ' + this.localize.localize.may + ' - ' + '2021 ' + this.localize.localize.sep,
            description: this.localize.localize.tradingService,
            imgUrls: ['trade.png'],
            link: 'https://imperialcg.com/',

            // Outer - card information
            cardHeader: this.localize.localize.imperialCapital,
            outerImgUrl: '/projects/trade_small.png',
            cardInfo: this.localize.localize.tradingServiceShort
        },
    ]
}

export interface projects {
    [x: string]: project
}

export interface project {
    // Details - inner page
    name: string
    date: string
    link: string
    imgUrls: string[]
    description: string

    // Outer - card information
    cardHeader: string
    outerImgUrl: string
    cardInfo: string
}
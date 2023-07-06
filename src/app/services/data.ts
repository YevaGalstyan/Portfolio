import {Injectable} from '@angular/core';
import {LocalizeService} from '../localizer/localize.service';
import {feedback, memberships, position, project} from '../interfaces/data';

@Injectable({
    providedIn: 'root'
})

export class DataService {

    constructor(private localize: LocalizeService) {
    }

    memberships: memberships[] = [
        {

        }
    ]

    feedbacks: feedback[] = [
        {
            imgUrl: 'andrey.jpeg',
            name: this.localize.localize.andreyVasilyev,
            position: this.localize.localize.andreyVasilyevPosition,
            review: this.localize.localize.reviewAndrey
        }
    ]

    positions: position[] = [
        {
            positionName: this.localize.localize.mid,
            period: '2021 ' + this.localize.localize.oct + ' - ' + this.localize.localize.present,
            companyName: this.localize.localize.inSource,
            location: this.localize.localize.yerevan,
            description: this.localize.localize.providingSupportInSource,
            skills: [this.localize.localize.angular, this.localize.localize.typescript,
                this.localize.localize.scss, this.localize.localize.figma]
        },

        {
            positionName: this.localize.localize.junior,
            period: '2020 ' + this.localize.localize.nov + ' - ' + '2021 ' + this.localize.localize.oct,
            companyName: this.localize.localize.technamin,
            location: this.localize.localize.yerevan,
            description: this.localize.localize.providingSupportTechnamin,
            skills: [this.localize.localize.angularJs, this.localize.localize.javascript,
                this.localize.localize.html]
        }
    ]

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
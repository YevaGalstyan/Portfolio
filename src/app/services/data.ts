import {Injectable} from '@angular/core';
import {LocalizeService} from '../localizer/localize.service';
import {feedback, membership, position, project} from '../interfaces/data';

@Injectable({
    providedIn: 'root'
})

export class DataService {

    constructor(private localize: LocalizeService) {
    }

    memberships: membership[] = [
        {
            imgUrl: 'ysuSC.jpeg',
            url: 'https://www.facebook.com/kirarakan.page',
            positionName: this.localize.localize.mediaHead,
            period: '2019 ' + this.localize.localize.sep + ' - 2023 ' + this.localize.localize.may,
            name: this.localize.localize.ysuSC,
            location: this.localize.localize.yerevan,
            description: this.localize.localize.ysuDescription,
            skills: [
                this.localize.localize.managementSkills,
                this.localize.localize.smm,
                this.localize.localize.adobePhotoshop,
                this.localize.localize.contentWriting,
            ]
        },

        {
            imgUrl: 'agbu.png',
            url: 'https://agbu.org/scouts',
            positionName: this.localize.localize.scout,
            period: '2017 ' + this.localize.localize.aug + ' - 2019 ' + this.localize.localize.sep,
            name: this.localize.localize.agbu,
            location: this.localize.localize.yerevan,
            description: this.localize.localize.agbuDescription,
            skills: [
                this.localize.localize.adobePhotoshop,
                this.localize.localize.adobeIllustrator,
                this.localize.localize.contentWriting,
                this.localize.localize.photographySkills,
            ]
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
            url: 'https://www.linkedin.com/company/insourceam/mycompany/',
            skills: [
                this.localize.localize.angular,
                this.localize.localize.typescript,
                this.localize.localize.scss,
                this.localize.localize.figma
            ]
        },

        {
            positionName: this.localize.localize.junior,
            period: '2020 ' + this.localize.localize.nov + ' - ' + '2021 ' + this.localize.localize.oct,
            companyName: this.localize.localize.technamin,
            location: this.localize.localize.yerevan,
            description: this.localize.localize.providingSupportTechnamin,
            url: 'https://technamin.com/',
            skills: [
                this.localize.localize.angularJs,
                this.localize.localize.javascript,
                this.localize.localize.html
            ]
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
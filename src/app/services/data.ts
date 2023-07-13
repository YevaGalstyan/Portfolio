import {Injectable} from '@angular/core';
import {LocalizeService} from '../localizer/localize.service';
import {feedback, membership, position, project} from '../interfaces/data';

@Injectable({
    providedIn: 'root'
})

export class DataService {

    constructor(private localize: LocalizeService) {
    }

    readonly trainings: membership[] = [
        {
            imgUrl: 'trainings/erasmus.jpeg',
            url: ' https://seriousweb.org/',
            positionName: this.localize.localize.selfManagementProgram,
            period: this.period(2022, this.localize.localize.may, 2022, this.localize.localize.may, 7, 13),
            name: this.localize.localize.ysuSC,
            location: this.localize.localize.yerevan,
            skills: [
                this.localize.localize.conflictSolving,
                this.localize.localize.coaching,
                this.localize.localize.leadershipSkills,
            ],
            attachedFiles: [
                {
                    fileName: this.localize.localize.attendanceCertificate,
                    fileLink: 'Youthpass.pdf'
                }
            ]
        },
        {
            imgUrl: 'trainings/ysuSC.png',
            url: ' https://seriousweb.org/',
            positionName: this.localize.localize.selfManagementProgram,
            period: this.period(2020, this.localize.localize.feb, 2020, this.localize.localize.mar, 28, 3),
            name: this.localize.localize.ysuSC,
            location: this.localize.localize.yerevan,
            skills: [
                this.localize.localize.teamWork,
                this.localize.localize.leadershipSkills,
                this.localize.localize.conflictResolution,
            ],
            attachedFiles: [
                {
                    fileName: this.localize.localize.attendanceCertificate,
                    fileLink: 'certificate_self_management.pdf'
                }
            ]
        },
        {
            imgUrl: 'trainings/seriousWeb.png',
            url: ' https://seriousweb.org/',
            positionName: this.localize.localize.applicationDevelopment,
            period: this.period(2020, this.localize.localize.jul, 2020, this.localize.localize.nov),
            name: this.localize.localize.seriousWebDevelopment,
            location: this.localize.localize.yerevan,
            skills: [
                this.localize.localize.html,
                this.localize.localize.css,
                this.localize.localize.javascript,
                this.localize.localize.jquery,
                this.localize.localize.git
            ]
        }
    ]


    readonly education: membership[] = [
        // Aveiro University
        {
            imgUrl: 'education/aveiroUni.png',
            url: 'https://www.ua.pt/',
            positionName: this.localize.localize.erasmusAveiro,
            period: this.period(2022, this.localize.localize.sep, 2023, this.localize.localize.jan),
            name: this.localize.localize.aveiroUniversity,
            location: this.localize.localize.aveiro,
            attachedFiles: [
                {
                    fileName: this.localize.localize.attendanceCertificate,
                    fileLink: 'certificate_of_attendance_Aveiro.pdf'
                }
            ]
        },

        // Yerevan State University
        {
            imgUrl: 'education/ysuUni.png',
            url: 'https://ysu.am/en',
            positionName: this.localize.localize.ysuFaculty,
            period: this.period(2019, this.localize.localize.sep, 2023, this.localize.localize.may),
            name: this.localize.localize.yerevanUniversity,
            location: this.localize.localize.yerevan,
        },

        // Polytechnic High School
        {
            imgUrl: 'education/polytechUni.png',
            url: 'https://polytech.am/en/high-school/',
            positionName: this.localize.localize.highSchool,
            period: this.period(2017, this.localize.localize.sep, 2019, this.localize.localize.may),
            name: this.localize.localize.polytechUniversity,
            location: this.localize.localize.yerevan,
        }
    ]

    readonly memberships: membership[] = [
        {
            imgUrl: 'memberships/ysuSC.jpeg',
            url: 'https://www.facebook.com/kirarakan.page',
            positionName: this.localize.localize.mediaHead,
            period: this.period(2019, this.localize.localize.sep, 2023, this.localize.localize.may),
            name: this.localize.localize.ysuIAMSC,
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
            imgUrl: 'memberships/agbu.png',
            url: 'https://agbu.org/scouts',
            positionName: this.localize.localize.scout,
            period: this.period(2017, this.localize.localize.aug, 2019, this.localize.localize.sep),
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

    readonly feedbacks: feedback[] = [
        {
            imgUrl: 'andrey.jpeg',
            name: this.localize.localize.andreyVasilyev,
            position: this.localize.localize.andreyVasilyevPosition,
            review: this.localize.localize.reviewAndrey
        }
    ]

    readonly positions: position[] = [
        {
            positionName: this.localize.localize.mid,
            period: this.period(2021, this.localize.localize.oct),
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
            period: this.period(2020, this.localize.localize.nov, 2021, this.localize.localize.oct),
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

    readonly projectsDetails: project[] = [
        {
            // Details - inner page
            name: this.localize.localize.medControl + ' / МЕД УПРАВЛЕНИЕ',
            date: this.period(2022, this.localize.localize.nov),
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
            date: this.period(2021, this.localize.localize.may, 2021, this.localize.localize.sep),
            description: this.localize.localize.tradingService,
            imgUrls: ['trade.png'],
            link: 'https://imperialcg.com/',

            // Outer - card information
            cardHeader: this.localize.localize.imperialCapital,
            outerImgUrl: '/projects/trade_small.png',
            cardInfo: this.localize.localize.tradingServiceShort
        },
    ]

    period(startYear: number, startMonth: string, endYear?: number, endMonth?: string, startDay?: number, endDay?: number) {
        if (!endYear && !endMonth) {
            return startMonth + ' ' + startYear + ' - ' + this.localize.localize.present
        }
        if (startDay && endDay) {
            return startDay + ' ' + startMonth + ' ' + startYear + ' - ' + endDay + ' ' + endMonth + ' ' + endYear
        }

        return startMonth + ' ' + startYear + ' - ' + endMonth + ' ' + endYear;
    }
}
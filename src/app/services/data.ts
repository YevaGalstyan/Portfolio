import {Injectable} from '@angular/core';
import {LocalizeService} from '../localizer/localize.service';
import {feedback, language, languageLevels, membership, position, project} from '../interfaces/data';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    
    constructor(private localize: LocalizeService) {
    }
    
    readonly trainings: membership[] = [
        {
            imgUrl: 'trainings/eudres.png',
            url: 'https://yic.am/',
            positionName: this.localize.localize.eudresBootcamp,
            period: this.period(2024, this.localize.localize.jul, 2024, this.localize.localize.jul, 1, 5),
            name: this.localize.localize.eudres,
            location: this.localize.localize.hasselt,
            skills: [
                this.localize.localize.aiIntegration,
                this.localize.localize.ethicalConsideration,
                this.localize.localize.interculturalCommunication,
            ],
            attachedFiles: [
                {
                    fileName: this.localize.localize.attendanceCertificate,
                    fileLink: 'bootcamp_eudres.pdf'
                }
            ]
        },
        {
            imgUrl: 'trainings/dataArt.png',
            url: 'https://www.dataart.team/events/dataart-winter-it-camp-2024',
            positionName: this.localize.localize.winterCamp,
            period: this.period(2024, this.localize.localize.feb, 2024, this.localize.localize.feb, 12, 18),
            name: this.localize.localize.dataArt,
            location: this.localize.localize.yerevan,
            skills: [
                this.localize.localize.interculturalCommunication,
                this.localize.localize.managementSkills
            ],
            attachedFiles: [
                {
                    fileName: this.localize.localize.attendanceCertificate,
                    fileLink: 'dataArtTraining.pdf'
                },
                {
                    fileName: this.localize.localize.transcript,
                    fileLink: 'hasselt_transcript.pdf'
                }
            ]
        },
        {
            imgUrl: 'trainings/react.png',
            url: 'https://sunnyschool.am/level-up/',
            positionName: this.localize.localize.reactLevelUp,
            period: this.period(2024, this.localize.localize.jan, 2024, this.localize.localize.may, 20, 3),
            name: this.localize.localize.sunnySchool,
            location: this.localize.localize.yerevan,
            skills: [
                this.localize.localize.reactJs,
                this.localize.localize.redux,
                this.localize.localize.reduxToolkit,
                this.localize.localize.typescript,
                this.localize.localize.webpack,
            ],
            links: [
                {
                    link: 'https://github.com/YevaGalstyan/react-app',
                    icon: 'icons/github-mark.svg'
                },
            ],
        },
        {
            imgUrl: 'trainings/erasmus.jpeg',
            url: 'https://yic.am/',
            positionName: this.localize.localize.fightFakeNews,
            period: this.period(2024, this.localize.localize.jan, 2024, this.localize.localize.jan, 7, 13),
            name: this.localize.localize.aisd,
            location: this.localize.localize.bilbao,
            skills: [
                this.localize.localize.erasmusMobility,
                this.localize.localize.fakeNews,
                this.localize.localize.nonFormal,
                this.localize.localize.criticalThinking,
            ],
            attachedFiles: [
                {
                    fileName: this.localize.localize.attendanceCertificate,
                    fileLink: 'YouthpassSpain.pdf'
                }
            ]
        },
        {
            imgUrl: 'trainings/erasmus.jpeg',
            url: 'https://yic.am/',
            positionName: this.localize.localize.lifeAfterMobility,
            period: this.period(2023, this.localize.localize.nov, 2023, this.localize.localize.nov, 20, 27),
            name: this.localize.localize.yic,
            location: this.localize.localize.gyumri,
            skills: [
                this.localize.localize.erasmusMobility,
                this.localize.localize.mentorship,
                this.localize.localize.coaching,
                this.localize.localize.nonFormal,
            ],
            attachedFiles: [
                {
                    fileName: this.localize.localize.attendanceCertificate,
                    fileLink: 'youthpassGyumri.pdf'
                }
            ]
        },
        {
            imgUrl: 'trainings/erasmus.jpeg',
            url: '',
            positionName: this.localize.localize.socialTransformation,
            period: this.period(2022, this.localize.localize.may, 2022, this.localize.localize.may, 7, 13),
            name: this.localize.localize.mvoProxima,
            location: this.localize.localize.bakuriani,
            skills: [
                this.localize.localize.erasmusMobility,
                this.localize.localize.conflictSolving,
                this.localize.localize.coaching,
                this.localize.localize.leadershipSkills,
            ],
            attachedFiles: [
                {
                    fileName: this.localize.localize.attendanceCertificate,
                    fileLink: 'YouthpassGeorgia.pdf'
                }
            ]
        },
        {
            imgUrl: 'trainings/ysuSC.png',
            url: 'https://www.facebook.com/YSUSC',
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
            url: '',
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
        // Fulda University
        {
            imgUrl: 'education/fuldaUni.jpeg',
            url: 'https://www.hs-fulda.de/',
            positionName: this.localize.localize.fuldaMastersUniversity,
            period: this.period(2024, this.localize.localize.apr),
            name: this.localize.localize.fuldaUniversity,
            location: this.localize.localize.fulda,
            attachedFiles: [
                {
                    fileName: this.localize.localize.enrollmentCertificate,
                    fileLink: 'enrollment_Fulda.pdf'
                }
            ]
        },
        
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
            attachedFiles: [
                {
                    fileName: this.localize.localize.diploma,
                    fileLink: 'university_diploma.pdf'
                }
            ]
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
            imgUrl: 'memberships/notion.png',
            url: 'https://www.notion.so/notion/Notion-Community-04f306fbf59a413fae15f42e2a1ab029',
            positionName: this.localize.localize.notionCampusLeader,
            period: this.period(2024, this.localize.localize.may),
            name: this.localize.localize.notion,
            location: this.localize.localize.fulda,
            description: this.localize.localize.notionDescription,
            skills: [
                this.localize.localize.managementSkills,
                this.localize.localize.organizationalSkills,
                this.localize.localize.eventManagement,
                this.localize.localize.networking
            ],
        },
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
            ],
            attachedFiles: [
                {
                    fileName: this.localize.localize.attendanceCertificate,
                    fileLink: 'volunteering_certificate_sc.pdf'
                }
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
            ],
            attachedFiles: [
                {
                    fileName: this.localize.localize.referenceLetter,
                    fileLink: 'scouting_certificate_AGBU.pdf'
                }
            ]
        }
    ]
    
    readonly conferences: membership[] = [
        {
            imgUrl: 'conferences/EAP-logo.png',
            url: 'https://ict.eapcivilsociety.eu/en#',
            positionName: this.localize.localize.frontEndDeveloper,
            period: this.period(2024, this.localize.localize.jan, 2024, this.localize.localize.jan, 26, 29),
            name: this.localize.localize.eap,
            location: this.localize.localize.chisinau,
            description: this.localize.localize.ysuDescription,
            skills: [
                this.localize.localize.managementSkills,
                this.localize.localize.figma,
                this.localize.localize.networking,
                this.localize.localize.publicSpeech,
            ],
            links: [
                {
                    link: 'https://www.facebook.com/EaPCivilSociety/posts/pfbid02tV6poEVUwZw13iN7e1tLAex1jgPxUaYjXNFbqz7tqGkWKynazy4Dzb3gqQYsoG1El',
                    icon: 'icons/facebook.png'
                },
                {
                    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7158192162403225601/',
                    icon: 'icons/linkedin.png'
                }
            ],
            attachedFiles: []
        },
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
            date: this.period(2024, this.localize.localize.jan, 2024, this.localize.localize.may),
            github: 'https://github.com/YevaGalstyan/E-commerce-react',
            
            // Outer - card information
            cardHeader: this.localize.localize.eCommerceApp,
            cardInfo: this.localize.localize.eCommerceShort,
            innerPage: false
        },
        
        {
            // Details - inner page
            name: this.localize.localize.medControl + ' / МЕД УПРАВЛЕНИЕ',
            date: this.period(2022, this.localize.localize.nov, 2024, this.localize.localize.jan),
            description: this.localize.localize.medControlService,
            imgUrls: ['med.png', 'med3.png', 'med1.png', 'med2.png'],
            link: 'https://app.med-upravlenie.ru/',
            
            // Outer - card information
            cardHeader: this.localize.localize.medControl,
            cardInfo: this.localize.localize.medControlServiceShort,
            innerPage: true
        },
        
        {
            // Details - inner page
            name: this.localize.localize.imperialCapital,
            date: this.period(2021, this.localize.localize.may, 2021, this.localize.localize.sep),
            description: this.localize.localize.tradingService,
            imgUrls: ['trade.png'],
            github: 'https://github.com/YevaGalstyan/trade-front',
            
            // Outer - card information
            cardHeader: this.localize.localize.imperialCapital,
            cardInfo: this.localize.localize.tradingServiceShort,
            innerPage: true
        },
    ]
    
    readonly languages: language[] = [
        {
            name: this.localize.localize.armenian,
            level: languageLevels.c2
        },
        {
            name: this.localize.localize.english,
            level: languageLevels.c1
        },
        {
            name: this.localize.localize.german,
            level: languageLevels.a1
        },
        {
            name: this.localize.localize.russian,
            level: languageLevels.b2
        }
    ];
    
    readonly languageLevels: string[] = [
        this.localize.localize.a1,
        this.localize.localize.a2,
        this.localize.localize.b1,
        this.localize.localize.b2,
        this.localize.localize.c1,
        this.localize.localize.c2
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

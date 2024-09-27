export interface project {
    // Details - inner page
    name?: string
    date?: string
    link?: string
    overview?: projectOverview[]
    description?: string
    github?: string

    // Outer - card information
    cardHeader: string
    cardInfo: string;
    innerPage: boolean
}

interface projectOverview {
    title?: string,
    description?: string,
    link?: string
    codeSnippets?: string[],
    imges?: string[]
}

export interface position {
    positionName: string
    period?: string
    companyName: string
    location: string
    description: string
    skills: string[]
    url: string
}

export interface feedback {
    imgUrl: string
    name: string
    position: string
    review: string
}

export interface membership {
    imgUrl: string;
    url: string
    positionName: string;
    period: string
    name: string
    location: string
    description?: string
    attachedFiles?: attachment[],
    links?: links[]
    skills?: string[]
}

export interface attachment {
    fileName: string
    fileLink: string
}

export interface links {
    icon: string
    link: string
}

export interface language {
    name: string
    level: number
}

export enum languageLevels {
    a1 = 1,
    a2 = 2,
    b1 = 3,
    b2 = 4,
    c1 = 5,
    c2 = 6
}


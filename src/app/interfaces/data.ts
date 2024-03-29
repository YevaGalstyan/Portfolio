export interface project {
    // Details - inner page
    name: string
    date: string
    link: string
    imgUrls: string[]
    description: string
    github?: string

    // Outer - card information
    cardHeader: string
    outerImgUrl: string
    cardInfo: string
}

export interface position {
    positionName: string
    period: string
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
    publications?: publications[]
    skills?: string[]
}

export interface attachment {
    fileName: string
    fileLink: string
}

export interface publications {
    icon: string
    link: string
}
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

export interface position {
    positionName: string
    period: string
    companyName: string
    location: string
    description: string
    skills: string[]
}

export interface feedback {
    imgUrl: string
    name: string
    position: string
    review: string
}

export interface memberships {

}
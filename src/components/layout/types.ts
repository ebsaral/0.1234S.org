import { Photo } from "react-photo-album";

// GalleryLayout
export type Album = {
    title: string,
    photos: Photo[]
}

// Info
export type InfoSectionItem = {
    title: string,
    text: string
}

export type InfoSection = {
    purpose: InfoSectionItem,
    description: InfoSectionItem,
    result: InfoSectionItem
}

// InnerLayout
type Image = {
    src: string,
    alt: string
}

export type InnerLayout = {
    image?: Image,
    isSoon?: boolean,
    title: string,
    subtitle: string,
    publishDate?: string,
    lastUpdateDate?: string,
    displayHomePageLink?: boolean,
}

// SectionItem
export type SectionItem = {
    translationPaths: {
        title: string,
        text?: string
    },
    link: string,
    image: {
        src: string,
        alt: string,
        width: number
    },
    titleStyle?: string,
    descriptionStyle?: string,
    displayLink?: boolean
}

// SectionWithItems
export type SectionWithItems = {
    translationPaths: {
        title: string
    };
    items: SectionItem[],
    minCol: number,
    maxCol: number,
    id: string,
    displayTitle: boolean
}
import { Photo } from "react-photo-album";

// GalleryLayout
export interface AlbumInterface {
    title: string;
    photos: Photo[]
}

// Info
export interface InfoSectionItem {
    title: string;
    text: string
}

export interface InfoSection {
    purpose: InfoSectionItem;
    description: InfoSectionItem;
    result: InfoSectionItem
}

// InnerLayout
export interface ImageInterface {
    src: string;
    alt: string;
}

export interface InnerLayoutInterface {
    image?: ImageInterface;
    isSoon?: boolean;
    title: string;
    subtitle: string;
    publishDate?: string;
    lastUpdateDate?: string;
    displayHomePageLink?: boolean;
    displayInfoLinks?: boolean;
}

// SectionItem
export interface SectionItemType {
    translationPaths: {
        title: string;
        text?: string;
    };
    link: string;
    image: {
        src: string,
        alt: string,
        width: number
    };
    titleStyle?: string;
    descriptionStyle?: string;
}

// SectionWithItems
export interface SectionWithItemsType {
    translationPaths: {
        title: string
    };
    items: SectionItemType[];
    minCol: number;
    maxCol: number;
}
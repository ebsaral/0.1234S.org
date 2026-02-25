import { ContentProjects } from '@/types';
import { Dictionary, LocalesValues } from 'intlayer';
import { Photo } from 'react-photo-album';

// GalleryLayout
export type Album = {
  title: string;
  subtitle?: string;
  photos: Photo[];
};

// Info
export type InfoSectionItem = {
  title: string;
  text: string;
};

export type InfoSection = {
  purpose: InfoSectionItem;
  description: InfoSectionItem;
  result: InfoSectionItem;
};

export type InnerLayout = {
  intlayerKey: string;
  locale: LocalesValues;
  isSoon?: boolean;
  publishDate?: string;
  lastUpdateDate?: string;
  displayHomePageLink?: boolean;
};

// SectionItem
export type SectionItem = {
  translationPaths: {
    title: string;
    text?: string;
  };
  link: string;
  image: {
    src: string;
    alt: string;
    width: number;
  };
  titleStyle?: string;
  descriptionStyle?: string;
  displayLink?: boolean;
};

// SectionWithItems
export type SectionWithItems = {
  content: Dictionary<ContentProjects>;
  minCol: number;
  maxCol: number;
  id: string;
  displayTitle: boolean;
};

// Quotes
export type QuoteItem = {
  title: string;
  description: string;
};
export type Quote = {
  title: string;
  subtitle: string;
  items: QuoteItem[];
};

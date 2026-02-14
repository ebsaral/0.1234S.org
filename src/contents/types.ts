import { SocialIconProps } from 'react-social-icons';

type Image = {
  src: string;
  alt: string;
};

type ContentBaseProjectPage = {
  image: Image;
  title: string;
  description: string;
  subtitle: string;
  preview: string;
  href: string;
};

export type ContentSectionItem = {
  title: string;
  text: string;
};

export type ContentProjectItem = {
  image: Image;
  title: string;
  text: string;
  href: string;
  spin?: boolean;
};

export interface ContentProjects {
  title: string;
  items: ContentProjectItem[];
}

export interface ContentGallery extends ContentBaseProjectPage {
  quote: string;
  doodles: string;
  drawings: string;
  graphics: string;
}

type InsertionContent<T> = (input: T) => string;

export interface ContentHome {
  title: string;
  subtitle: string;
  description: string;
  seperators: string[];
  lastUpdate: string;
  image: Image;
  links: {
    cv: {
      label: string;
      link: string;
    };
    work: SocialIconProps[];
    social: SocialIconProps[];
    contact: SocialIconProps[];
  };
  flags: { [key: string]: string };
  datePicker: {
    quote: string;
    description: string;
    sumInsertion: InsertionContent<{ value: number }>;
    mod: {
      value: number;
      text: InsertionContent<{ value: number }>;
    };
  };
}

export interface ContentProjects {
  title: string;
  items: ContentProjectItem[];
}

export interface ContentQuotes extends ContentBaseProjectPage {
  items: {
    title: string;
  }[];
}

export interface ContentShared {
  publishDate: string;
  lastUpdate: string;
  lastRevelation: string;
  githubSource: string;
  soon: string;
  home: string;
  viewGoogleForm: string;
  onlyInTurkish: string;
  onlyInEnglish: string;
  showMore: string;
}

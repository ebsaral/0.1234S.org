type Image = {
    src: string;
    alt: string;
}

type ContentBaseProjectPage = {
    image: Image;
    title: string;
    description: string;
    subtitle: string;
    preview: string,
    href: string;
}

type ContentSectionItem = {
    title: string;
    text: string;
}

export type ContentProjectItem = {
  image: Image;
  title: string;
  text: string;
  href: string;
}

export interface ContentProjects  {
  title: string
  items: ContentProjectItem[]
}

export interface ContentAsses extends ContentBaseProjectPage {
  sections: ContentSectionItem[]
  gallery: {
    title: string
  }
}

export interface ContentGallery extends ContentBaseProjectPage {
  doodles: string
  drawings: string
}

export interface ContentHazzetiEmin extends ContentBaseProjectPage {
  sections: ContentSectionItem[];
}

export interface ContentHome {
  title: string
  subtitle: string
  seperators: string[]
  image: Image
  links: {
    cv: {
      label: string
      link: string
    },
    politics: {
      label: string
      link: string
    }
  }
}

export interface ContentProjects  {
  title: string
  items: ContentProjectItem[]
}

export interface ContentQuotes extends ContentBaseProjectPage {
  items: ContentSectionItem[]
}

export interface ContentShared {
  publishDate: string
  lastUpdate: string
  lastRevelation: string
  githubSource: string
  soon: string
  home: string
  viewGoogleForm: string
  onlyInTurkish: string
  onlyInEnglish: string
  showMore: string
}
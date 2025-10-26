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

export type ContentSectionItem = {
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

export interface ContentGallery extends ContentBaseProjectPage {
  doodles: string
  drawings: string
}

export interface ContentHome {
  title: string
  subtitle: string
  description: string
  seperators: string[]
  image: Image
  links: {
    cv: {
      label: string
      link: string
    }
  },
  flags: { [key: string]: string}
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
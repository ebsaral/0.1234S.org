import { t, type Dictionary } from 'intlayer';
import { ContentShared } from './types';

const pageContent = {
  key: 'page-shared',
  content: {
    publishDate: t({
      en: 'Publish date',
      tr: 'Yayınlanma tarihi',
    }),
    lastUpdate: t({
      en: 'Last update',
      tr: 'Son güncelleme',
    }),
    lastRevelation: t({
      en: 'Last revelation',
      tr: 'Son vahiy',
    }),
    githubSource: t({
      en: 'GitHub source',
      tr: 'GitHub kaynağı',
    }),
    soon: t({
      en: 'soon',
      tr: 'yakında',
    }),
    home: t({
      en: 'Home Page',
      tr: 'Ana Sayfa',
    }),
    viewGoogleForm: t({
      en: 'View Google Form Document',
      tr: 'Google Form Dökümanına Göz At',
    }),
    onlyInTurkish: t({
      en: 'Only in Turkish',
      tr: 'Sadece Türkçe',
    }),
    onlyInEnglish: t({
      en: 'Only in English',
      tr: 'Sadece İngilizce',
    }),
    showMore: t({
      en: 'show more',
      tr: 'devamını göster',
    }),
  },
} satisfies Dictionary<ContentShared>;

export default pageContent;

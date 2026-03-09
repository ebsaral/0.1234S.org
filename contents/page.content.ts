import { t, type Dictionary } from 'intlayer';

interface BasePage {
  notFound: string;
}

const pageContent = {
  key: 'page',
  content: {
    notFound: t({
      en: 'Page not found.',
      tr: 'Sayfa bulunamadı.',
    }),
  },
} satisfies Dictionary<BasePage>;

export default pageContent;

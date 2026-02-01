import { t, type Dictionary } from 'intlayer';
import { ContentGallery } from './types';

const pageContent = {
  key: 'page-gallery',
  content: {
    image: {
      src: '/images/gallery-logo.png',
      alt: 'Emin Buğra Saral, 2023.',
    },
    title: t({
      en: 'Gallery',
      tr: 'Galeri',
    }),
    description: t({
      en: "Drawings, paintings, doodles, and graphics that I've created randomly, carrying my surroundings' imprints.",
      tr: 'Çevremin izlerini taşıyarak rastgele yarattığım çizimler, resimler, karalamalar ve grafikler.',
    }),
    subtitle: t({
      en: "Drawings, paintings, doodles, and graphics that I've created randomly, carrying my surroundings' imprints.",
      tr: 'Çevremin izlerini taşıyarak rastgele yarattığım çizimler, resimler, karalamalar ve grafikler.',
    }),
    quote: t({
      en: '',
      tr: 'San, ve at bir kenara. Geride kalanlar düşünsün, gibi.',
    }),
    preview: t({
      en: 'Doodles, drawings,\npaintings and graphics.',
      tr: 'Karalamalar, çizimler,\nresimler ve grafikler.',
    }),
    href: '/gallery',
    doodles: t({
      en: 'Doodles',
      tr: 'Karalamalar',
    }),
    drawings: t({
      en: 'Paintings & Drawings',
      tr: 'Resimler & Çizimler',
    }),
    graphics: t({
      en: 'Graphics',
      tr: 'Grafikler',
    }),
  },
} satisfies Dictionary<ContentGallery>;

export default pageContent;

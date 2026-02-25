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
      en: "Shapes in which I've randomly reflected my feelings, carrying the imprints of my surroundings.",
      tr: 'Çevremin izlerini taşıyarak hislerimi rastgele yansıttığım şekiller.',
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
    doodles: {
      title: t({
        en: 'Doodles',
        tr: 'Karalamalar',
      }),
      subtitle: t({
        en: 'Some memories from my mandatory military service in Ankara.',
        tr: "Ankara'daki zorunlu askerlik hizmetim sürecinden geriye kalan hatıralar.",
      }),
    },
    drawings: {
      title: t({
        en: 'Paintings & Drawings',
        tr: 'Resimler & Çizimler',
      }),
      subtitle: t({
        en: 'Drawings and paintings left behind by different eras, different cities, different countries, and different people.',
        tr: 'Farklı dönemler, farklı şehirler, farklı ülkeler, ve farklı insanlardan geriye kalan resimler ve çizimler.',
      }),
    },
    graphics: {
      title: t({
        en: 'Graphics',
        tr: 'Grafikler',
      }),
      subtitle: t({
        en: 'Word games, thought exercises, pastimes, and plenty of color.',
        tr: 'Kelime oyunları, düşünce egzersizleri, vakit geçirmeceler ve bolca renk.',
      }),
    },
  },
} satisfies Dictionary<ContentGallery>;

export default pageContent;

import { insert, Locales, t, type Dictionary } from 'intlayer';
import { ContentHome } from './types';

const pageContent = {
  key: 'page-home',
  content: {
    image: {
      src: '/images/logo.png',
      alt: t({
        en: 'EBS | Munich, 2023.',
        tr: 'EBS | Münih, 2023.',
      }),
    },
    title: t({
      en: 'Emin Buğra Saral',
      tr: 'Emin Buğra Saral',
    }),
    subtitle: t({
      en: 'Simplicity within a certain complexity.',
      tr: 'Belirli bir karmaşanın içindeki sadelik.',
    }),
    description: t({
      en: 'A funnywise one with\n engineering, feeling and artistic skills.',
      tr: 'Mühendislik, sezgi ve sanatsal\n becerileri olan eğlendeli biri.',
    }),
    seperators: [
      t({
        en: '───── ∞ ─────',
        tr: '───── ∞ ─────',
      }),
    ],
    lastUpdate: insert(
      t({
        en: 'Last update: {{date}}',
        tr: 'Son güncelleme: {{date}}',
      }),
    ),
    links: {
      cv: {
        label: t({
          en: 'Resume (CV)',
          tr: 'Öz Geçmiş (CV)',
        }),
        link: t({
          en: 'files/cv/english.pdf',
          tr: 'files/cv/turkish.pdf',
        }),
      },
      social: [
        {
          label: 'GitHub',
          url: 'https://www.github.com/ebsaral',
        },
        {
          label: 'Flickr',
          url: 'http://flickr.com/photos/ebsaral/',
        },
        {
          label: 'Couchsurfing',
          url: 'https://www.couchsurfing.com/people/ebsaral',
        },
        {
          label: 'SoundCloud',
          url: 'https://soundcloud.com/ebsaral',
        },
        {
          label: 'Instagram',
          url: 'https://www.instagram.com/goettheus',
        },
        {
          label: 'TikTok',
          url: 'https://www.tiktok.com/@hazzeti.emin',
        },
        {
          label: 'Bluesky',
          url: 'https://bsky.app/profile/ebsaral.bsky.social',
        },
        {
          label: 'WhatsApp',
          url: 'https://wa.me/905322580093',
        },
        {
          label: 'Telegram',
          url: 'https://t.me/ebsaral',
        },
      ],
    },
    flags: {
      [Locales.ENGLISH]: '🇺🇸',
      [Locales.TURKISH]: '🇹🇷',
    },
    datePicker: {
      quote: t({
        en: "Sum makes sense, some doesn't.",
        tr: 'Tanrı çarpma, kulları ise toplama işlemine bakar.',
      }),
      description: t({
        en: 'S(n) = sum of the digits of n',
        tr: 'S(n) = n sayısının rakamlarının toplamı',
      }),
      sumInsertion: insert('S({{value}})'),
      mod: {
        value: 9,
        text: insert('(mod {{value}})'),
      },
    },
  },
} satisfies Dictionary<ContentHome>;

export default pageContent;

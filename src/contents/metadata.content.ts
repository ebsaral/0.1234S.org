import { type Dictionary, t } from 'intlayer';
import { Metadata } from 'next';

const metadataContent = {
  key: 'page-metadata',
  content: {
    title: t({
      en: 'Emin Buğra Saral',
      tr: 'Emin Buğra Saral',
    }),
    description: t({
      en: 'Simplicity within a certain complexity.',
      tr: 'Belirli bir karmaşanın içindeki sadelik.',
    }),
    applicationName: '0.1234S.org',
    authors: [
      {
        name: 'Emin Buğra Saral',
        url: 'https://0.1234s.org',
      },
    ],
    generator: 'Next.js',
    keywords: t({
      en: 'emin buğra saral',
      tr: 'emin buğra saral',
    }),
    referrer: 'origin',
    creator: '0.1234S.org',
    publisher: 'Emin Buğra Saral',
    robots: {
      index: true,
      follow: true,
    },
    manifest: 'https://0.1234s.org/manifest.webmanifest',
    openGraph: {
      type: 'website',
      images: [
        {
          url: 'http://0.1234s.org/logos/logo-og.png?v=1',
          secureUrl: 'https://0.1234s.org/logos/logo-og.png?v=1',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
    },
    verification: {},
    appleWebApp: {
      capable: true,
      title: '1234S.org',
    },
  },
} satisfies Dictionary<Metadata>;

export default metadataContent;

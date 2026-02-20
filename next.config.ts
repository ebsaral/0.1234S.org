import type { NextConfig } from 'next';
import { withIntlayer } from 'next-intlayer/server';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/galeri',
        destination: '/tr/gallery',
        permanent: false,
      },
      {
        source: '/ozgecmis',
        destination: '/files/cv/tr.pdf',
        permanent: false,
      },
      {
        source: '/resume',
        destination: '/files/cv/en.pdf',
        permanent: false,
      },
      {
        source: '/files/cv/english.pdf',
        destination: '/files/cv/en.pdf',
        permanent: false,
      },
      {
        source: '/files/cv/turkish.pdf',
        destination: '/files/cv/tr.pdf',
        permanent: false,
      },
    ];
  },
};

export default withIntlayer(nextConfig);

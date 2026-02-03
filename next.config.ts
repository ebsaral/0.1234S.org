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
        destination: '/files/cv/turkish.pdf',
        permanent: false,
      },
      {
        source: '/resume',
        destination: '/files/cv/english.pdf',
        permanent: false,
      },
    ];
  },
};

export default withIntlayer(nextConfig);

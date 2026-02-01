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
    ];
  },
};

export default withIntlayer(nextConfig);

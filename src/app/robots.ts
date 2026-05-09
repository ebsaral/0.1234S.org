import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: 'https://0.1234s.org',
    sitemap: 'https://0.1234s.org/sitemap.xml',
  };
}

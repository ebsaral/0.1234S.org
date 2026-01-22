import { getMultilingualUrls } from 'intlayer';
import type { MetadataRoute } from 'next';

const baseUrl = 'https://0.1234s.org';
const pages = ['', '/gallery'];

const sitemaps = pages.map((page) => {
  const url = `${baseUrl}${page}`;
  return {
    url,
    alternates: {
      languages: { ...getMultilingualUrls(url) },
    },
    changeFrequency: 'hourly',
    lastModified: new Date(),
  };
});

const sitemap = (): MetadataRoute.Sitemap => sitemaps as MetadataRoute.Sitemap;

export default sitemap;

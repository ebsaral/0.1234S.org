import type { MetadataRoute } from 'next'


export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.saral.me',
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: 'https://saral.me/tr',
        },
      },
    },
    {
      url: 'https://www.saral.me/gallery',
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: 'https://saral.me/tr/gallery',
        },
      },
    },
    {
      url: 'https://www.saral.me/files',
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: 'https://saral.me/tr/files',
        },
      },
    },
    {
      url: 'https://www.saral.me/hazzeti-emin',
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: 'https://saral.me/tr/hazzeti-emin',
        },
      },
    }
  ]
}
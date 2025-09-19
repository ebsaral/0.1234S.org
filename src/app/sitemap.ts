import type { MetadataRoute } from 'next'


export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://0.1234s.org',
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: 'https://0.1234s.org/tr',
        },
      }
    },
    {
      url: 'https://0.1234s.org/gallery',
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: 'https://0.1234s.org/tr/gallery',
        },
      }
    },
    {
      url: 'https://0.1234s.org/hazzeti-emin',
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: 'https://0.1234s.org/tr/hazzeti-emin',
        },
      }
    },
    {
      url: 'https://0.1234s.org/asses',
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: 'https://0.1234s.org/tr/asses',
        },
      }
    }
  ]
}
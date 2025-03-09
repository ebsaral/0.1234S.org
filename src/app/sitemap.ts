import type { MetadataRoute } from 'next'


export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ebsaral.vercel.app',
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: 'https://ebsaral.vercel.app/tr',
        },
      },
    },
    {
      url: 'https://ebsaral.vercel.app/gallery',
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: 'https://ebsaral.vercel.app/tr/gallery',
        },
      },
    }
  ]
}
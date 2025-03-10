import type { MetadataRoute } from 'next'


export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ebsaral.vercel.app',
      lastModified: new Date()
    },
    {
      url: 'https://ebsaral.vercel.app/gallery',
      lastModified: new Date()
    }
  ]
}
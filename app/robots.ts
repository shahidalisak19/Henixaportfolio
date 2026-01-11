import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: 'https://henixaportfolio.vercel.app/sitemap.xml',
    host: 'https://henixaportfolio.vercel.app',
  }
}
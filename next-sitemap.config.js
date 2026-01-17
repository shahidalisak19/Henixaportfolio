/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://henixaportfolio.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  outDir: './public', // Generate sitemap in public folder
}

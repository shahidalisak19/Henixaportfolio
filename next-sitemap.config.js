// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://henixaportfolio.vercel.app', // Your real domain
  generateRobotsTxt: true,
  sitemapSize: 50000,       // Large number to avoid multiple sitemaps
  outDir: './public',       // Ensure sitemap is generated in public folder
}

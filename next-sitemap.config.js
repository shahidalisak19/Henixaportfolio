/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://henixaportfolio.vercel.app', // ← Replace with your real domain
  generateRobotsTxt: true,           // This will create robots.txt automatically
  changefreq: 'daily',               // Optional: tells Google how often pages change
  priority: 0.7,                     // Optional: page importance
  sitemapSize: 5000,                  // Optional: split sitemap if more than 5000 URLs
};

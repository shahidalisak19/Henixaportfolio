/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development
  reactStrictMode: true,
  
  // Enable SWC minification for better performance
  swcMinify: true,
  
  // Image optimization configuration
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all external images (adjust as needed)
      },
    ],
  },
  
  // Headers for SEO and security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ],
      },
      // Sitemap XML headers
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=86400',
          }
        ],
      },
      // Robots.txt headers
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=86400',
          }
        ],
      },
    ]
  },
  
  // Redirects for better UX
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
      {
        source: '/portfolio',
        destination: '/viewwork',
        permanent: true,
      },
      {
        source: '/work',
        destination: '/viewwork',
        permanent: true,
      },
      {
        source: '/projects',
        destination: '/viewwork',
        permanent: true,
      },
      {
        source: '/start',
        destination: '/getstarted',
        permanent: true,
      },
      {
        source: '/quote',
        destination: '/getstarted',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
    ]
  },
  
  // Rewrites if you need API proxies
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.your-backend.com/:path*', // Replace with your actual API
      },
    ]
  },
  
  // Environment variables that should be available at build time
  env: {
    SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://henixaportfolio.vercel.app',
    SITE_NAME: 'Henixa | Software Development Company',
  },
  
  // Compiler options for better bundle optimization
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remove console.log in production
  },
  
  // Experimental features (optional)
  experimental: {
    optimizeCss: true, // Optimize CSS
    scrollRestoration: true, // Better scroll restoration
  },
}

module.exports = nextConfig
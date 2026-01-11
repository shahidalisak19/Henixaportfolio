import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Henixa | Software Development Company",
    template: "%s | Henixa Software Development"
  },
  description: "Henixa Software Development Company - Custom software solutions, web applications, mobile apps, and enterprise software development services.",
  keywords: [
    "software development company",
    "custom software development",
    "web application development", 
    "mobile app development",
    "Henixa",
    "Henixa software",
    "software company",
    "enterprise software",
    "SaaS development",
    "custom software solutions"
  ],
  authors: [{ name: "Henixa Software Development Company" }],
  creator: "Henixa Software Development Company",
  publisher: "Henixa",
  metadataBase: new URL('https://henixaportfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  // Google Verification
  verification: {
    google: "rBqpNJ_UzTe2lm8I25aXiwP5tdGbHNezw8M8AcrJQJ4",
  },
  openGraph: {
    type: 'website',
    url: 'https://henixaportfolio.vercel.app',
    title: 'Henixa | Software Development Company - Custom Solutions',
    description: 'Professional software development company specializing in custom software, web applications, and mobile app development.',
    siteName: 'Henixa Software Development Company',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Henixa Software Development Company',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Henixa Software Development Company',
    description: 'Custom software solutions and application development services',
    creator: '@henixa',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Schema.org structured data
  other: {
    'application-name': 'Henixa Software Development Company',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" />
        
        {/* Google Verification */}
        <meta name="google-site-verification" content="rBqpNJ_UzTe2lm8I25aXiwP5tdGbHNezw8M8AcrJQJ4" />
        
        {/* Structured Data for Software Development Company */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Henixa Software Development Company",
            "applicationCategory": "DeveloperApplication",
            "operatingSystem": "Web, iOS, Android",
            "description": "Custom software development company specializing in web applications, mobile apps, and enterprise solutions",
            "url": "https://henixaportfolio.vercel.app",
            "author": {
              "@type": "Organization",
              "name": "Henixa Software Development Company"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "200"
            }
          })}
        </script>
        
        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Henixa Software Development Company",
            "url": "https://henixaportfolio.vercel.app",
            "logo": "https://henixaportfolio.vercel.app/logo.png",
            "sameAs": [],
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "support@henixa73.com",
              "contactType": "customer service",
              "availableLanguage": "English"
            }
          })}
        </script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
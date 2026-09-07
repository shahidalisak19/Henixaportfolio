





// import type { Metadata } from "next";
// import Script from "next/script";
// import { Geist, Geist_Mono } from "next/font/google";
// //import "./globals.css";
// import"./globals.css";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: {
//     default: "3Cs | Software Development Company",
//     template: "%s | 3Cs Software Development",
//   },
//   description:
//     "3Cs Software Development Company - Custom software solutions, web applications, mobile apps, and enterprise software development services.",
//   keywords: [
//     "software development company",
//     "custom software development",
//     "web application development",
//     "mobile app development",
//     "3Cs",
//     "3Cs software",
//     "software company",
//     "enterprise software",
//     "SaaS development",
//     "custom software solutions",
//   ],
//   authors: [{ name: "3Cs Software Development Company" }],
//   creator: "3Cs Software Development Company",
//   publisher: "3Cs",
//   metadataBase: new URL("https://3Csportfolio.vercel.app"),
//   alternates: {
//     canonical: "/",
//   },
//   verification: {
//     google:"hAAwPuKE2ry5WzZr7HfsJrQ71RSHfKswqyMybLogi5Q",
//   },
//   openGraph: {
//     type: "website",
//     url: "https://3Csportfolio.vercel.app",
//     title: "3Cs | Software Development Company - Custom Solutions",
//     description:
//       "Professional software development company specializing in custom software, web applications, and mobile app development.",
//     siteName: "3Cs Software Development Company",
//     images: [
//       {
//         url: "/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "3Cs Software Development Company",
//       },
//     ],
//     locale: "en_US",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "3Cs Software Development Company",
//     description: "Custom software solutions and application development services",
//     creator: "@3Cs",
//     images: ["/og-image.png"],
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   other: {
//     "application-name": "3Cs Software Development Company",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Google AdSense */}
//         <Script
//           async
//           strategy="afterInteractive"
//           src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1212177675139054"
//           crossOrigin="anonymous"
//         />

//         {/* Icons */}
//         <link rel="icon" href="/favicon.ico" />
//         <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

//         {/* Meta */}
//         <meta
//           name="viewport"
//           content="width=device-width, initial-scale=1, maximum-scale=5"
//         />
//         <meta name="theme-color" content="#000000" />
// <meta name="google-adsense-account" content="ca-pub-1212177675139054"></meta>
//         {/* Google Verification */}
//         <meta
//           name="google-site-verification"
//           content="hAAwPuKE2ry5WzZr7HfsJrQ71RSHfKswqyMybLogi5Q"
//         />

//         {/* SoftwareApplication Schema */}
//         <Script
//           id="software-application-schema"
//           type="application/ld+json"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "SoftwareApplication",
//               name: "3Cs Software Development Company",
//               applicationCategory: "DeveloperApplication",
//               operatingSystem: "Web, iOS, Android",
//               description:
//                 "Custom software development company specializing in web applications, mobile apps, and enterprise solutions",
//               url: "https://3Csportfolio.vercel.app",
//               author: {
//                 "@type": "Organization",
//                 name: "3Cs Software Development Company",
//               },
//               offers: {
//                 "@type": "Offer",
//                 price: "0",
//                 priceCurrency: "USD",
//               },
//               aggregateRating: {
//                 "@type": "AggregateRating",
//                 ratingValue: "4.9",
//                 ratingCount: "200",
//               },
//             }),
//           }}
//         />

//         {/* Organization Schema */}
//         <Script
//           id="organization-schema"
//           type="application/ld+json"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "Organization",
//               name: "3Cs Software Development Company",
//               url: "https://3Csportfolio.vercel.app",
//               logo: "https://3Csportfolio.vercel.app/logo.png",
//               sameAs: [],
//               contactPoint: {
//                 "@type": "ContactPoint",
//                 email: "support@3Cs73.com",
//                 contactType: "customer service",
//                 availableLanguage: "English",
//               },
//             }),
//           }}
//         />
//       </head>

//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
import type { Metadata } from 'next'


export const metadata: Metadata = {
  metadataBase: new URL('https://3Csportfolio.vercel.app'),
  title: {
    default: '3Cs Software Development | Custom Software Solutions',
    template: '%s | 3Cs Software Development'
  },
  description: '3Cs Software Development Company provides custom software solutions, web applications, mobile apps, and enterprise software development. 200+ successful projects delivered.',
  keywords: ['software development', 'custom software', 'web development', 'mobile app development', 'enterprise software', 'software company', '3Cs', 'software solutions'],
  authors: [{ name: '3Cs Software Development' }],
  creator: '3Cs Software Development',
  publisher: '3Cs Software Development',
  robots: 'index, follow',
  openGraph: {
    title: '3Cs Software Development | Custom Software Solutions',
    description: 'Professional software development company delivering custom web apps, mobile apps, and enterprise solutions. 200+ projects delivered with 99.8% client satisfaction.',
    url: 'https://3Csportfolio.vercel.app',
    siteName: '3Cs Software Development',
    images: [
      {
        url: '/poster.png',
        width: 1200,
        height: 630,
        alt: '3Cs Software Development Company',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '3Cs Software Development | Custom Software Solutions',
    description: 'Professional software development company delivering custom web apps, mobile apps, and enterprise solutions.',
    images: ['/poster.png'],
    creator: '@3CsDev',
  },
  alternates: {
    canonical: 'https://3Csportfolio.vercel.app',
  },
  verification: {
    google: 'google0cef1c26b30f360c.html',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
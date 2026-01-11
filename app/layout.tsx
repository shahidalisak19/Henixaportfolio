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
  title: "Henixa Digital Solutions | Web Development Agency",
  description: "Professional digital agency specializing in web development, mobile apps, and digital transformation.",
  keywords: ["web development", "digital agency", "mobile apps", "UI/UX design", "Henixa"],
  authors: [{ name: "Henixa" }],
  metadataBase: new URL('https://henixaportfolio.vercel.app'),
  // ADD THE VERIFICATION HERE:
  verification: {
    google: "rBqpNJ_UzTe2lm8I25aXiwP5tdGbHNezw8M8AcrJQJ4",
  },
  openGraph: {
    type: 'website',
    url: 'https://henixaportfolio.vercel.app',
    title: 'Henixa Digital Solutions | Professional Web Development',
    description: 'Transform your digital presence with Henixa.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Henixa Digital Solutions',
    description: 'Professional digital agency',
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
        {/* ALSO ADD THE META TAG DIRECTLY: */}
        <meta name="google-site-verification" content="rBqpNJ_UzTe2lm8I25aXiwP5tdGbHNezw8M8AcrJQJ4" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
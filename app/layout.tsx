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
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
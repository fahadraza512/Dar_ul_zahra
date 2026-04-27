import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import dynamic from 'next/dynamic';

const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false });
const SplashScreen = dynamic(() => import('@/components/SplashScreen'), { ssr: false });

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Dar ul Zahra - Educational Institution',
    template: '%s | Dar ul Zahra',
  },
  description: 'Dar ul Zahra - Providing quality education and nurturing future leaders',
  keywords: ['education', 'school', 'learning', 'Dar ul Zahra'],
  authors: [{ name: 'Dar ul Zahra' }],
  creator: 'Dar ul Zahra',
  publisher: 'Dar ul Zahra',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://darulzahra.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Dar ul Zahra - Educational Institution',
    description: 'Providing quality education and nurturing future leaders',
    siteName: 'Dar ul Zahra',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dar ul Zahra',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dar ul Zahra - Educational Institution',
    description: 'Providing quality education and nurturing future leaders',
    creator: '@darulzahra',
    images: ['/og-image.jpg'],
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body className={inter.className}>
        <SplashScreen />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

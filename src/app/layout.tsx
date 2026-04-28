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
    <html lang="en" style={{ overflowX: "hidden" }}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        {/* Inline splash blocker — covers page before ANY JS runs */}
        <style dangerouslySetInnerHTML={{ __html: `
          #__splash_blocker {
            position: fixed;
            inset: 0;
            z-index: 9999;
            background-color: #f15a24;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: clamp(16px, 4vw, 28px);
          }
          #__splash_blocker .sb-ring {
            position: relative;
            width: clamp(140px, 30vw, 200px);
            height: clamp(140px, 30vw, 200px);
          }
          #__splash_blocker .sb-ring::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 50%;
            border: 2px dashed rgba(255,255,255,0.4);
          }
          #__splash_blocker .sb-ring::after {
            content: '';
            position: absolute;
            inset: 8%;
            border-radius: 50%;
            border: 1px solid rgba(255,255,255,0.25);
          }
          #__splash_blocker img {
            position: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            width: 55%;
            height: 55%;
            object-fit: contain;
          }
          #__splash_blocker .sb-title {
            color: #2d5a1b;
            font-size: clamp(14px, 4vw, 22px);
            letter-spacing: 0.18em;
            text-transform: uppercase;
            text-align: center;
            white-space: nowrap;
            font-family: NexaRustSlab, serif;
          }
          #__splash_blocker .sb-sub {
            color: rgba(255,255,255,0.65);
            font-size: clamp(9px, 2.5vw, 11px);
            letter-spacing: 0.2em;
            text-transform: uppercase;
            text-align: center;
          }
        `}} />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        {/* Static splash — identical layout to React splash, no JS needed */}
        <div id="__splash_blocker" aria-hidden="true">
          <div className="sb-ring">
            <img src="/logo.png" alt="" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
            <p className="sb-title">DAR-UL-ZAHRA</p>
            <p className="sb-sub">Educational Centre</p>
          </div>
        </div>
        <SplashScreen />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

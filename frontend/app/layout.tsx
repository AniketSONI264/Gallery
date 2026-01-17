import type { Metadata } from 'next';
import './globals.css';

import { Geist, Geist_Mono } from 'next/font/google';
import { Playfair_Display, Dancing_Script } from 'next/font/google';

import ClientLayout from './ClientLayout';
import BackgroundMusic from '@/components/BackgroundMusic';
import PageTransition from '@/components/PageTransition';
import HeartCursorTrail from '@/components/HeartCursor';
import ClickHearts from '@/components/ClickHearts';
import BackgroundMusicPlayer from '@/components/BackgroundMusicPlayer';
import BackgroundMusicButton from '@/components/BackgroundMusicButton';
// import Konami from '@/components/Konami';

/* -------------------- FONTS -------------------- */

export const handwritten = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-handwritten',
  display: 'swap',
});

export const serif = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

/* -------------------- METADATA -------------------- */

export const metadata: Metadata = {
  title: {
    default: 'Bebooooo 💝',
    template: '%s · Bebooooo 💝',
  },
  description: 'A quiet journey through love, time, and memory.',
  icons: {
    icon: '/favicon-heart.svg',
    shortcut: '/favicon-heart.svg',
    apple: '/favicon-heart.svg',
  },
  openGraph: {
    title: 'Bebooooo 💝',
    description: 'Not captured. Felt.',
    siteName: 'Bebooooo',
    type: 'website',
  },
};

/* -------------------- ROOT LAYOUT -------------------- */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${serif.variable}
        ${handwritten.variable}
      `}
    >
      <body
        className="
          bg-black
          text-white
          antialiased
          selection:bg-pink-500/30
          selection:text-white
        "
      >
        {/* Cursor-based effects must be TOP-LEVEL */}
        <HeartCursorTrail />
        <ClickHearts />
        {/* <Konami /> */}

        {/* Persistent ambience */}
        <BackgroundMusic />
        <BackgroundMusicPlayer />
        <BackgroundMusicButton />

        {/* Page transitions + layout */}
        <PageTransition>
          <ClientLayout>
            {children}
          </ClientLayout>
        </PageTransition>
      </body>
    </html>
  );
}


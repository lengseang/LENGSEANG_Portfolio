import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { SmoothScroll } from '@/app/_components/SmoothScroll';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lengseang.dev'),
  title: 'Khem Seangleng | Full-Stack Developer',
  description:
    'Portfolio of Khem Seangleng (Leng), a Full-Stack Developer building clean, responsive interfaces, secure admin systems, and robust backend system architectures.',
  icons: {
    icon: '/portfolio/khem-profile.jpg',
    shortcut: '/portfolio/khem-profile.jpg',
    apple: '/portfolio/khem-profile.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('theme');
                  var isLight = t === 'light' || (!t && matchMedia('(prefers-color-scheme: light)').matches);
                  if (isLight) {
                    document.documentElement.classList.add('light');
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning className="relative min-h-screen">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

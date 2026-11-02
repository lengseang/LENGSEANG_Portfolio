import type { Metadata } from 'next';
import { JetBrains_Mono, Manrope } from 'next/font/google';
import localFont from 'next/font/local';

import { SmoothScroll } from '@/app/_components/SmoothScroll';
import filmDark from '@/app/_data/bg-film-dark.json';
import filmLight from '@/app/_data/bg-film-light.json';
import './globals.css';

// Headings: Cormorant Garamond (carved-inscription serif); body: Manrope; labels and code: JetBrains Mono
// Cormorant is self-hosted (Google's latin variable file): for next/font's fetch Google serves it from an
// /l/font?kit=...&skey=... URL that Turbopack cannot resolve ("next/font/google queries have exactly one entry").
const display = localFont({
  src: './_fonts/cormorant-garamond-latin.woff2',
  variable: '--font-cormorant',
  weight: '500 700',
  display: 'swap',
});

const sans = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
});

const mono = JetBrains_Mono({
  variable: '--font-jetbrains',
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
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
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
                  // background film (ScrollFilm.tsx): start its tiny scrub video now, before the page scripts run; the
                  // component picks up this same download (a link preload was not reused when still in flight)
                  var th = isLight ? 'light' : 'dark';
                  var v = matchMedia('(max-aspect-ratio: 1/1)').matches ? 'portrait' : 'landscape';
                  var ver = isLight ? '${filmLight.v}' : '${filmDark.v}';
                  window.__filmLo = { t: th, v: v, blob: fetch('/bg/' + th + '/scrub-' + v + '-lo.mp4?v=' + ver).then(function (r) { return r.blob(); }) };
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

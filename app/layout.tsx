import type { Metadata } from 'next';

import { TechBackground } from '@/app/_components/TechBackground';
import './globals.css';

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('theme');
                  if (t === 'light' || (!t && matchMedia('(prefers-color-scheme: light)').matches)) {
                    document.documentElement.classList.add('light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning className="relative min-h-screen">
        <TechBackground />
        {children}
      </body>
    </html>
  );
}

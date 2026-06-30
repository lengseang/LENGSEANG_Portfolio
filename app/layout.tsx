import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Leng Seang | Frontend Developer Portfolio',
  description:
    'A redesigned portfolio for Leng Seang, a frontend developer in Cambodia building thoughtful interfaces with Next.js, Tailwind CSS, and motion.',
  icons: {
    icon: '/portfolio/leng-logo.png',
    shortcut: '/portfolio/leng-logo.png',
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
      <body>{children}</body>
    </html>
  );
}

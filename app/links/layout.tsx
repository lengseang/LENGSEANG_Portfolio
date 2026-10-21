import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social & Quick Connect | Khem Seangleng',
  description:
    'Direct links to Khem Seangleng’s LinkedIn, GitHub, full portfolio, live projects, CV download, and contact details.',
  openGraph: {
    title: 'Khem Seangleng | Quick Connect & Social Links',
    description:
      'Direct links to LinkedIn, GitHub, portfolio, live projects, CV download, and contact details for Khem Seangleng.',
    images: ['/portfolio/khem-profile.jpg'],
  },
};

export default function LinksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Leng Seang | Frontend Developer Portfolio",
  description:
    "A redesigned portfolio for Leng Seang, a frontend developer in Cambodia building thoughtful interfaces with Next.js, Tailwind CSS, and motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}

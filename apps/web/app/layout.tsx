import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AlignArtistry | Vintage Charm, Modern Style',
  description:
    'Discover a curated collection where vintage charm meets modern style. Shop dresses, shoes, accessories and more.',
  keywords: ['fashion', 'vintage', 'modern', 'clothing', 'accessories', 'e-commerce'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

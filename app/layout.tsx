import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const notoSans = localFont({
  src: './fonts/noto.ttf',
  variable: '--font-noto-sans',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Nicolas DE RAEMY - Front-End Developper (FR)',
  description: 'Portfolio of Nicolas DE RAEMY, a front-end developer based in France',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fr'>
      <body className={`${notoSans.variable} antialiased`}>{children}</body>
    </html>
  );
}

import localFont from 'next/font/local';
import { Gloria_Hallelujah } from 'next/font/google';
import './globals.css';

// Excalifont (Excalidraw, SIL OFL 1.1) is the site's typeface; next/font preloads it
// and size-matches the fallback so the page doesn't jump when it loads.
const excalifont = localFont({
  src: '../fonts/Excalifont-Regular.woff2',
  weight: '400',
  style: 'normal',
  display: 'swap',
  variable: '--font-excalifont',
});

// Secondary face, only for the name and the one highlighted word per line (.f2 in globals.css).
const gloria = Gloria_Hallelujah({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-gloria',
});

export const metadata = {
  title: 'Pheno — video editor & motion designer',
  description: 'Shreyansh (Pheno) — reels, YouTube edits, motion graphics and 3D for creators and brands.',
};

export const viewport = {
  themeColor: '#0f0d13',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${excalifont.variable} ${gloria.variable}`}>
      <body>{children}</body>
    </html>
  );
}

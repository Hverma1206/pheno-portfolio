import './globals.css';

export const metadata = {
  title: 'Pheno — video editor & motion designer',
  description: 'Shreyansh (Pheno) — reels, YouTube edits, motion graphics and 3D for creators and brands.',
};

export const viewport = {
  themeColor: '#0f0d13',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Kalam:wght@400;700&family=Space+Mono:wght@400;700&display=swap" />
      </head>
      <body>{children}</body>
    </html>
  );
}

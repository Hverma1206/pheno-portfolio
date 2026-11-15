/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: process.cwd(),
  // Work-grid covers come from YouTube and Vimeo; next/image resizes them per tile.
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.ytimg.com', pathname: '/vi/**' },
      { protocol: 'https', hostname: 'i.vimeocdn.com', pathname: '/video/**' },
    ],
  },
  // The stylesheet is small (~11 KB), so it goes inline in the HTML instead of costing a render-blocking request.
  experimental: { inlineCss: true },
};

export default nextConfig;

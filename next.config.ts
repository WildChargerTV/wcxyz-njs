// * next.config.ts
// * Next.js Configuration File

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable static exports (disables image optimization)
  basePath: '/wcxyz-njs',
  output: 'export',
  reactStrictMode: true,
  images: { unoptimized: true }
};

export default nextConfig;

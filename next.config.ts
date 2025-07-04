import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Konfiguracja dla GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/restauracja-demo' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/restauracja-demo/' : '',
};

export default nextConfig;

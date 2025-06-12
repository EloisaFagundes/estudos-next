import type { NextConfig } from "next";
const { BLOG_URL } = process.env

const nextConfig: NextConfig = {
   async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/blog',
        destination: `${BLOG_URL}/blog`,
      },
      {
        source: '/blog/:path*',
        destination: `${BLOG_URL}/blog/:path*`,
      },
    ]
  },
  reactStrictMode: true,
};

export default nextConfig;

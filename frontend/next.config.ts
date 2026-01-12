import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Optimize for Vercel deployment

  // Enable static optimization where possible
  reactStrictMode: true,
  // Ensure proper image optimization
  images: {
    domains: [],
    remotePatterns: [],
  },
};

export default nextConfig;

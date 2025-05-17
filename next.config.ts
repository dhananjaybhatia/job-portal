import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  }, experimental: {
    ppr: 'incremental'
  },
  devIndicators: {

    position: "bottom-right"
  }
};

export default nextConfig;

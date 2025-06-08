import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "rednet-development.s3.eu-north-1.amazonaws.com" },
    ],
  },
  /* config options here */
};

export default nextConfig;

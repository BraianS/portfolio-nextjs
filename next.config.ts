import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  distDir:"dist",
  output:"export",
  reactStrictMode: true,
  images: {unoptimized:true}
};

export default nextConfig;

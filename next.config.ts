import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath:"/portfolio-nextjs",
  distDir:"dist",
  output:"export",
  reactStrictMode: true,
  images: {unoptimized:true}
};

export default nextConfig;

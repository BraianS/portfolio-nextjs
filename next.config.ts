import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV == 'production';

const nextConfig: NextConfig = {
  
  /* config options here */
  basePath: isProd ? "/portfolio-nextjs" : "",
  distDir:"dist",
  output:"export",
  reactStrictMode: true,
  images: {unoptimized:true}
};

export default nextConfig;

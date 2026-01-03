// next.config.ts
import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const branchName = "/";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  assetPrefix: branchName,
  basePath: branchName,
  output: 'export',
};

export default nextConfig;



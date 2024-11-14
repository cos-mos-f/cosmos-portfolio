// next.config.ts
import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  assetPrefix: isProd ? '/cosmos-portfolio/' : '',
  basePath: isProd ? '/cosmos-portfolio' : '',
  output: 'export',
};

export default nextConfig;


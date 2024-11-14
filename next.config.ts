// next.config.ts
import type { NextConfig } from 'next';
const withLinaria = require('next-with-linaria');

const isProd = process.env.NODE_ENV === 'production';
const branchName = process.env.BRANCH_NAME ? "/" + process.env.BRANCH_NAME : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  assetPrefix: branchName,
  basePath: branchName,
  output: 'export',
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  }
};

export default withLinaria(nextConfig);



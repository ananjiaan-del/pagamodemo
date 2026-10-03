import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/pagamodemo',
  assetPrefix: '/pagamodemo/',
  trailingSlash: true,
};

export default nextConfig;

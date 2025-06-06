import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* output: 'export',
  images: {
    unoptimized: true,
  }, */
  experimental: {
    useCache: true,
    cacheLife: {
      seconds: {
        stale: 0,
        revalidate: 10,
        expire: 10,
      },
    },
  },
};

export default nextConfig;

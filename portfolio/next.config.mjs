/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove basePath and assetPrefix if you want the site at the root
  // If you want it at /portfolio, keep these:
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
};

export default nextConfig;
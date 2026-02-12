/** @type {import('next').NextConfig} */
// This config is for STATIC deployments (GitHub Pages, FTP, etc.)
// Use: NODE_ENV=production node -e "require('fs').copyFileSync('next.config.static.mjs', 'next.config.mjs')" && npm run build

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

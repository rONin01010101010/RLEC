/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' for Render deployment
  // Use next.config.static.mjs for static deployments (GitHub Pages)

  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

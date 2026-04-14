/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
    serverComponentsExternalPackages: ['better-sqlite3'],
  },
};

module.exports = nextConfig;

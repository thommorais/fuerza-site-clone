/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: '**.fuerzastudio.com.br',
      },
    ],
    domains: [
      'localhost',

    ],
  },
}

module.exports = nextConfig

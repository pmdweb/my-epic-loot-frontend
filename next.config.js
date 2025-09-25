/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configure webpack for Docker file watching
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
}
module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'cardinal117.github.io'],
    unoptimized: true, // Required for static export
  },
  output: 'export',
  trailingSlash: true, // This is good for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/prexis-turbines' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/prexis-turbines/' : '', // Note trailing slash
  
  // Optional: Add these for better compatibility
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
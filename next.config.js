/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'cardinal117.github.io'],
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/prexis-turbines' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/prexis-turbines' : '',
  
  // Add this to prevent 404 folder creation
  distDir: 'out',
  
  // Optional: Add clean URLs
  skipTrailingSlashRedirect: true,
}

module.exports = nextConfig
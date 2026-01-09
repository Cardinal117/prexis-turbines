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
}

module.exports = nextConfig
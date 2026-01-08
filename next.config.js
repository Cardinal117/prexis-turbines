/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'cardinal117.github.io'],
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  basePath: '/prexis-turbines',
  assetPrefix: '/prexis-turbines',
}

module.exports = nextConfig

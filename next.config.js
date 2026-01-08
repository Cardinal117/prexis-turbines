/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  output: 'export',
  trailingSlash: true,
  basePath: '/prexis-turbines',
  assetPrefix: '/prexis-turbines',
}

module.exports = nextConfig

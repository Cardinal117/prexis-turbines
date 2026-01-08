/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  output: 'export',
  trailingSlash: true,
  basePath: '',
  assetPrefix: '',
}

module.exports = nextConfig

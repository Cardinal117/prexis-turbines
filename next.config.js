/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // ← CRITICAL for static hosting
  images: {
    unoptimized: true,  // Required for static export
  },
  trailingSlash: true,  // Helps with routing
}

module.exports = nextConfig
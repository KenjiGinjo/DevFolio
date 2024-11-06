import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/en-US/:path*',
      },
    ]
  },
}

export default nextConfig

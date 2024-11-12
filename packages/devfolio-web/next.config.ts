import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/zh-CN/:path*',
        destination: '/zh-CN/:path*',
      },
      {
        source: '/:path*',
        destination: '/en-US/:path*',
      },
    ]
  },
}

export default nextConfig

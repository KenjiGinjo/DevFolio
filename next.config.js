/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  experimental: {
    typedRoutes: true,
    serverComponentsExternalPackages: ["@prisma/client"],
  },
  // i18n: {
  //   locales: ["en", "zh-CN"],
  //   defaultLocale: "en",
  // }
}

module.exports = nextConfig;

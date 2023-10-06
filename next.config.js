/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        reactStrictMode: false,
        serverActions: true,
        serverComponentsExternalPackages: ['mongoose']
      },
      images: {
        domains: ['m.media-amazon.com']
      },
}

module.exports = nextConfig

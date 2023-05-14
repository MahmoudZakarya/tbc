/** @type {import('next').NextConfig} */
const nextConfig = {
   webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  reactStrictMode: true,
  images: {

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/photos/**',
      },
       {
        protocol: 'https',
        hostname: 'www.reuters.com',
        port: '',
        pathname: '/resizer/**',
      }
    ],
  },
}

module.exports = nextConfig

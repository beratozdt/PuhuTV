/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img-puhutv.mncdn.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}
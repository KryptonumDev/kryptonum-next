/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  productionBrowserSourceMaps: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: ['cdn.sanity.io']
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pl',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

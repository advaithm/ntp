const withOffline = require('next-offline')

const config = {
  images: {
    domains: ['unsplash.com'],
  },
}

module.exports = withOffline(config)
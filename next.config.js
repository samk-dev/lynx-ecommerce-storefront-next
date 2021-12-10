/** @type {import('next').NextConfig} */
const { ecommerceDriverConfig } = require('./services/common/appConfig');

module.exports = ecommerceDriverConfig({
  shop: {
    driver: 'shopify',
  },
  reactStrictMode: true,
});

console.log('nextConfig', JSON.stringify(module.exports, null, 2));

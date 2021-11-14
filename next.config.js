/** @type {import('next').NextConfig} */
const { ecommerceDriverConfig } = require('./services/common/appConfig');

module.exports = ecommerceDriverConfig({
  shop: {
    driver: process.env.SHOP_DRIVER,
  },
  reactStrictMode: true,
});

console.log('nextConfig', JSON.stringify(module.exports, null, 2));

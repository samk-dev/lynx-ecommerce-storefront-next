/** @type {import('next').NextConfig} */
const { ecommerceDriverConfig } = require('./services/common/appConfig');

module.exports = ecommerceDriverConfig({
    reactStrictMode: true,
});

console.log('nextConfig', JSON.stringify(module.exports, null, 2));

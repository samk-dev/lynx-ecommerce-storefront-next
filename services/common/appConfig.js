const path = require('path');
const merge = require('deepmerge');

function ecommerceDriverConfig(defaultConfig = {}) {
    /*
     * TODO
     * replace the shopify string to work
     * from .env file process.env.SHOP_DRIVER
     */
    const driver = 'shopify';

    const driverNextconfig = require(path.join('../', driver, 'next.config'));
    const config = merge(defaultConfig, driverNextconfig);

    return config;
}

module.exports = { ecommerceDriverConfig };

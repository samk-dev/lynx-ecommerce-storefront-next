const fs = require('fs');
const path = require('path');
const merge = require('deepmerge');
const prettier = require('prettier');
const allowedDrivers = ['shopify', 'woocommerce'];

function ecommerceDriverConfig(defaultConfig = {}) {
  const driver = defaultConfig?.shop?.driver;

  if (!driver) {
    throw new Error(
      'Shop driver name is missing, please provide a valid driver name in your .env.development file'
    );
  }

  if (!allowedDrivers.includes(driver)) {
    throw new Error(
      `The ${driver} is not a valid driver. please use one of ${allowedDrivers.join(
        ', '
      )}`
    );
  }

  const driverNextconfig = require(path.join('../', driver, 'next.config'));
  const config = merge(defaultConfig, driverNextconfig);

  const tsPath = path.join(process.cwd(), 'tsconfig.json');
  const tsConfig = require(tsPath);

  tsConfig.compilerOptions.paths['@shop'] = [`services/${driver}`];
  tsConfig.compilerOptions.paths['@shop/*'] = [`services/${driver}/*`];

  fs.writeFileSync(
    tsPath,
    prettier.format(JSON.stringify(tsConfig), { parser: 'json' })
  );

  return config;
}

module.exports = { ecommerceDriverConfig };

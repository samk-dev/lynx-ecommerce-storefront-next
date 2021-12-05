const fs = require('fs');
const path = require('path');
const merge = require('deepmerge');
const prettier = require('prettier');

function ecommerceDriverConfig(defaultConfig = {}) {
  const driver = defaultConfig?.shop?.driver;

  if (!driver) {
    throw new Error(
      'Shop driver name is missing, please provide a valid driver name in your .env.development file'
    );
  }

  const driverNextconfig = require(path.join(
    '../shop/api',
    driver,
    'next.config'
  ));
  const config = merge(defaultConfig, driverNextconfig);

  const tsPath = path.join(process.cwd(), 'tsconfig.json');
  const tsConfig = require(tsPath);

  tsConfig.compilerOptions.paths['@shopApi'] = [`services/shop/api/${driver}`];
  tsConfig.compilerOptions.paths['@shopApi/*'] = [
    `services/shop/api/${driver}/*`,
  ];

  fs.writeFileSync(
    tsPath,
    prettier.format(JSON.stringify(tsConfig), { parser: 'json' })
  );

  return config;
}

module.exports = { ecommerceDriverConfig };

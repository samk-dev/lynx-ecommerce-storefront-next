/**
 * Global App configuration
 *
 * @desc Merges services config files into next.config.js
 *   && adds path alieses to each service for easier access
 *
 * @param {next.config.js}
 *
 */
const fs = require('fs');
const path = require('path');
const merge = require('deepmerge');
const prettier = require('prettier');

const currentDIR = process.cwd();

/**
 * Update Aliases
 *
 * @desc updates directory aliases for the services
 *
 * @param alias: string
 * @param aliasName: string
 */
const updateServicesAliases = (alias, aliasName) => {
  const tsPath = path.join(currentDIR, 'tsconfig.json');
  const tsConfig = require(tsPath);

  tsConfig.compilerOptions.paths[`@${alias}`] = [aliasName];
  tsConfig.compilerOptions.paths[`@${alias}/*`] = [`${aliasName}/*`];

  fs.writeFileSync(
    tsPath,
    prettier.format(JSON.stringify(tsConfig), { parser: 'json' })
  );
};

function driversConfig(defaultConfig = {}) {
  const shopDriver = defaultConfig?.drivers?.shop;
  const shopAlias = `services/shop/api/${shopDriver}`;
  const shopAliasName = 'shopApi';

  if (!shopDriver) {
    throw new Error(
      "Shop driver name is missing, please provide a valid driver name in your next.config.js > drivers > shop. Ex: 'woocommerce'"
    );
  }

  const shopConfig = require(path.join(
    `${currentDIR}/services/shop/api/`,
    shopDriver,
    'next.config'
  ));

  const nextConfig = merge(defaultConfig, shopConfig);

  updateServicesAliases(shopAliasName, shopAlias);

  return nextConfig;
}

module.exports = { driversConfig };

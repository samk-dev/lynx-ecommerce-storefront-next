import { ApiConfig } from '@shopApi/types/api';
import { Product, ProductsResponseType } from '@shop/types/product';
import { productsQuery } from '@shopApi/queries';
import { normalizeProduct } from '@shopApi/utils';

const getProducts = async (config: ApiConfig): Promise<Product[]> => {
  const { data } = await config.fetch<ProductsResponseType>({
    url: config.apiUrl,
    query: productsQuery,
  });

  const products =
    data.products.edges.map(({ node: product }) => {
      return normalizeProduct(product);
    }) ?? [];

  return products;
};

export default getProducts;

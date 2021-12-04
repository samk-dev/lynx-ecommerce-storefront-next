import { shopifyApi, normalizeProduct } from '@shopApi/utils';
import { ProductConnection } from '@shopApi/schema.d';
import { productsQuery } from '@shopApi/queries';
import { Product } from '@shop/types/product';

type ReturnType = {
  products: ProductConnection;
};

const getProducts = async (): Promise<Product[]> => {
  const { data } = await shopifyApi<ReturnType>({
    url: 'http://localhost:4000/graphql',
    query: productsQuery,
  });

  const products =
    data.products.edges.map(({ node: product }) => {
      return normalizeProduct(product);
    }) ?? [];

  return products;
};

export default getProducts;

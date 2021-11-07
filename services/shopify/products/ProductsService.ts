import shopifyApi from "../utils/shopifyApi";
import { ProductConnection } from "../schema.d";
import productsQuery from "../utils/queries/productsQuery";

type ReturnType = {
  products: ProductConnection;
};

const getProducts = async (): Promise<any> => {
  const { data } = await shopifyApi<ReturnType>({
    url: "http://localhost:4000/graphql",
    query: productsQuery,
  });

  return data.products;
};

export default getProducts;

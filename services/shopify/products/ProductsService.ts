import shopifyApi from "../utils/shopifyApi";
import productsQuery from "../utils/queries/productsQuery";

const getProducts = async (): Promise<any[]> => {
  const products = await shopifyApi({
    url: "http://localhost:4000/graphql",
    query: productsQuery,
  });

  return products.data;
};

export default getProducts;

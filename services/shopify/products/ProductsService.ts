import productsQuery from "../utils/queries/productsQuery";

const fetchProducts = async () => {
  const url = "http://localhost:4000/graphql";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: productsQuery,
    }),
  });

  const data = await response.json();

  return { data };
};

const getProducts = async (): Promise<any[]> => {
  const products = await fetchProducts();
  return products.data;
};

export default getProducts;

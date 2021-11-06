const fetchProducts = async () => {
  const url = "https://jsonplaceholder.typicode.com/todos";

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return { data };
};

const getProducts = async (): Promise<any[]> => {
  const products = await fetchProducts();
  return products.data;
};

export default getProducts;

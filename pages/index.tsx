import type { InferGetStaticPropsType } from "next";
import getProducts from "@shop/products/ProductsService";

export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <div>
      <samp>{JSON.stringify(products)}</samp>
    </div>
  );
}

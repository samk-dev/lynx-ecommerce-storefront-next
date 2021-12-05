import type { InferGetStaticPropsType } from 'next';
import { getConfig } from '@shopApi/config';
import LayoutDefault from '@layouts/default/LayoutDefault';
import getProducts from '@shop/products/ProductsService';

export async function getStaticProps() {
  const config = getConfig();
  const products = await getProducts(config);

  return {
    props: {
      products: JSON.stringify(products),
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <LayoutDefault>
      <div>
        <samp>{products}</samp>
      </div>
    </LayoutDefault>
  );
}

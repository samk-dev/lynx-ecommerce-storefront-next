import type { InferGetStaticPropsType } from 'next';
import { getConfig } from '@shopApi/config';
import LayoutDefault from '@layouts/default/LayoutDefault';
import getProducts from '@shop/products/ProductsService';
import Grid from '@components/ui/Grid/Grid';
import ProductCard from '@components/ui/ProductCard/ProductCard';

export async function getStaticProps() {
  const config = getConfig();
  const products = await getProducts(config);

  return {
    props: {
      products: products,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <LayoutDefault>
      <Grid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </LayoutDefault>
  );
}

import type { InferGetStaticPropsType } from 'next';
import { getConfig } from '@shopApi/config';
import { LayoutDefault } from '@layouts';
import { Container, Grid } from '@components/layout';
import { ProductCard } from '@components/ui';
import getProducts from '@shop/products/ProductsService';

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
      <Container htmlTag={'section' as any}>
        <Grid>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Grid>
      </Container>
    </LayoutDefault>
  );
}

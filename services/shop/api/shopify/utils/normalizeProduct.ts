import { Product as ShopifyProduct, ImageEdge } from '../schema.d';
import { Product } from '@shop/types/product';

const normalizeImages = ({ edges }: { edges: Array<ImageEdge> }) =>
  edges.map(({ node: { originalSrc: url, ...more } }) => ({
    url: `/images/${url}`,
    ...more,
  }));

const normalizeProduct = function (productNode: ShopifyProduct): Product {
  const {
    id,
    title,
    handle,
    vendor,
    description,
    images: imageConnection,
    ...more
  } = productNode;

  const product = {
    id,
    title,
    slug: handle,
    vendor,
    description,
    path: `/${handle}`,
    images: normalizeImages(imageConnection) ?? [],
    ...more,
  };

  return product;
};

export default normalizeProduct;

import { Product as ShopifyProduct, ImageEdge, MoneyV2 } from '../schema.d';
import { Product } from '@shop/types/product';

const normalizeImages = ({ edges }: { edges: Array<ImageEdge> }) =>
  edges.map(({ node: { originalSrc: url, ...more } }) => ({
    url: `/images/${url}`,
    ...more,
  }));

const normalizePrice = ({ currencyCode, amount }: MoneyV2) => {
  return {
    value: +amount,
    currencyCode,
  };
};

const normalizeProduct = function (productNode: ShopifyProduct): Product {
  const {
    id,
    title,
    handle,
    vendor,
    description,
    priceRange,
    images: imageConnection,
    ...more
  } = productNode;

  const product = {
    id,
    title,
    slug: handle,
    vendor,
    description,
    price: normalizePrice(priceRange.minVariantPrice),
    path: `/${handle}`,
    images: normalizeImages(imageConnection) ?? [],
    ...more,
  };

  return product;
};

export default normalizeProduct;

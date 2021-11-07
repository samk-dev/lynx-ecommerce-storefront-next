import { Product as ShopifyProduct, ImageEdge } from "../schema.d";

const normalizeImages = ({ edges }: { edges: Array<ImageEdge> }) =>
  edges.map(({ node: { originalSrc, ...more } }) => ({
    url: `/images/${originalSrc}`,
    ...more,
  })) ?? [];

const normalizeProduct = function (productNode: ShopifyProduct): any {
  const {
    id,
    title,
    handle: slug,
    vendor,
    description,
    images,
    ...more
  } = productNode;

  const product = {
    id,
    title,
    slug,
    vendor,
    description,
    path: `/${slug}`,
    images: normalizeImages(images),
    ...more,
  };

  return product;
};

export default normalizeProduct;

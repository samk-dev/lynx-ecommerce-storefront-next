import { Product as ShopifyProduct, ImageEdge } from "../schema.d";
import { Product } from "@common/types/product";

const normalizeImages = ({ edges }: { edges: Array<ImageEdge> }) =>
  edges.map(({ node: { originalSrc: url, ...more } }) => ({
    url: `/images/${url}`,
    ...more,
  }));

export function normalizeProduct(productNode: ShopifyProduct): Product {
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
}

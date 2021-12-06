import { ProductConnection } from '@shopApi/schema.d';

export type ProductsResponseType = {
  products: ProductConnection;
};

export interface ProductImage {
  url: string;
  alt?: string;
}

export interface ProductPrice {
  value: number;
  currencyCode: string;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  vendor: string;
  description: string;
  price: ProductPrice;
  path: string;
  images?: ProductImage[];
}

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@shop/types/product';
import css from './ProductCard.module.css';

interface Props {
  product: Product;
}

const fallbackImg = '/fallbacks/product-card-fallback.svg';

const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <a className="cardProductLink">
        <div className={css.cardProduct}>
          {product.images && (
            <Image
              src={fallbackImg}
              alt={product.images[0].alt}
              width={540}
              height={540}
              quality="85"
              layout="responsive"
            />
          )}
          <h3>{product.title}</h3>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;

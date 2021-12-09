import css from '../styles/pages/wishlist.module.css';
import { LayoutDefault } from '@layouts';
import { Container } from '@components/layout';
import { IconHeart } from '@components/icons';

const Whishlist = () => {
  const isEmpty = true;
  return (
    <LayoutDefault>
      <section>
        <Container>
          <div className="mt-3 mb-20">
            <div className="group flex flex-col">
              {isEmpty ? (
                <div className={css.wishlistEmpty}>
                  <span className={css.wishlistEmptyIconBox}>
                    <IconHeart classes={css.wishlistEmptyIcon} />
                  </span>
                  <h2 className={css.wishlistEmptyHeadline}>
                    Your wishlist is empty
                  </h2>
                </div>
              ) : (
                <h1>Wishlist cards...</h1>
              )}
            </div>
          </div>
        </Container>
      </section>
    </LayoutDefault>
  );
};

export default Whishlist;

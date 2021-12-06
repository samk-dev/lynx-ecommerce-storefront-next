import css from './IconNav.module.css';
import Link from 'next/link';
import { IconBag, IconHeart } from '@components/icons';

const IconNav = () => {
  return (
    <nav>
      <ul className={css.iconList}>
        <li className={css.iconListItem}>
          <IconBag />
        </li>
        <li className={css.iconListItem}>
          <Link href="/">
            <a>
              <IconHeart />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default IconNav;

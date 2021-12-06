import css from './Header.module.css';
import Link from 'next/link';
import { Container } from '@components/layout';
import { IconNav } from '@components/ui';

const Header = () => {
  const navLinks = [
    {
      label: 'All',
      href: '/',
      id: 0,
    },
    {
      label: 'Cloths',
      href: '/cloths',
      id: 1,
    },
    {
      label: 'Accesories',
      href: '/accesories',
      id: 2,
    },
    {
      label: 'Shoes',
      href: '/shoes',
      id: 3,
    },
  ];

  return (
    <header className={css.header}>
      <Container>
        <div className={css.headerContent}>
          <div className={css.headerLogo}>
            <Link href="/">
              <a>
                <h1>Lynx</h1>
                <span>Storefront</span>
              </a>
            </Link>
          </div>

          <div className={css.headerNavbar}>
            {navLinks.map((link) => (
              <Link key={link.id} href={link.href}>
                <a>{link.label}</a>
              </Link>
            ))}
          </div>

          <div className={css.headerNavIcon}>
            <IconNav />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

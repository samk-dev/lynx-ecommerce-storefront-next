import css from './LayoutDefault.module.css';
import { LayoutDefaultProps } from '../types';
import { Footer, Header } from '@components/layout';

const LayoutDefault = ({ children }: LayoutDefaultProps) => {
  return (
    <>
      <Header />
      <main className={css.layout}>
        <div className={css.layoutContent}>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default LayoutDefault;

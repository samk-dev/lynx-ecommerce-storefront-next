import css from './LayoutDefault.module.css';
import { LayoutDefaultProps } from '../types';
import { Footer } from '@components/layout';

const LayoutDefault = ({ children }: LayoutDefaultProps) => {
  return (
    <>
      <main className={css.layout}>
        <div className={css.layoutContent}>
          <h1>Default Layout</h1>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LayoutDefault;

import css from './LayoutDefault.module.css';
import { LayoutDefaultProps } from '../types';

const LayoutDefault = ({ children }: LayoutDefaultProps) => {
  return (
    <>
      <main className={css.layout}>
        <div className={css.layoutContent}>
          <h1>Default Layout</h1>
          {children}
        </div>
      </main>
    </>
  );
};

export default LayoutDefault;

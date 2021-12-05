import style from './LayoutDefault.module.css';
import { LayoutDefaultProps } from '../types';

const LayoutDefault = ({ children }: LayoutDefaultProps) => {
  return (
    <>
      <main className={style.layout}>
        <h1>Default Layout</h1>
        {children}
      </main>
    </>
  );
};

export default LayoutDefault;

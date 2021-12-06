import css from './Container.module.css';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode[] | ReactNode;
}

const Container = ({ children }: Props) => {
  return <div className={css.container}>{children}</div>;
};

export default Container;

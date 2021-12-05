import { ReactNode } from 'react';
import css from './Grid.module.css';

interface Props {
  children: ReactNode;
}

const Grid = ({ children }: Props) => {
  return <div className={css.gridBlock}>{children}</div>;
};

export default Grid;

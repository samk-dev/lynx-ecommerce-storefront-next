import css from './Container.module.css';
import {
  ComponentType,
  FunctionComponent,
  HTMLAttributes,
  ReactNode,
} from 'react';

interface Props {
  children: ReactNode[] | ReactNode;
  htmlTag?: ComponentType<HTMLAttributes<HTMLElement>>;
}

const Container: FunctionComponent<Props> = ({
  children,
  htmlTag: HtmlTag = 'div',
}) => {
  return <HtmlTag className={css.container}>{children}</HtmlTag>;
};

export default Container;

import { LayoutDefaultProps } from './types';

const LayoutDefault = ({ children }: LayoutDefaultProps) => {
  return (
    <main className="default-layout">
      <h1>Default Layout</h1>
      {children}
    </main>
  );
};

export default LayoutDefault;

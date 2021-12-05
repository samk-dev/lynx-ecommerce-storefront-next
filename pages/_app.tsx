import '@styles/globals.css';
import type { AppProps } from 'next/app';

function LynxStorefront({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default LynxStorefront;

import type { AppProps } from 'next/app';

const ToplyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default ToplyApp;

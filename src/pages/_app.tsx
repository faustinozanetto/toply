import '../styles/globals.css';
import '@fontsource/poppins';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { store } from '@state/store';
import { Provider } from 'react-redux';

const ToplyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
};

export default ToplyApp;

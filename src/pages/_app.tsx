import '../styles/globals.css';
import '@fontsource/poppins';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { store } from '@state/store';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { initializeGTag } from '@lib/google';
initializeGTag();
const ToplyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {}, []);

  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
};

export default ToplyApp;

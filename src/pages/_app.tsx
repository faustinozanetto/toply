import '../styles/globals.css';
import '@fontsource/poppins';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { store } from '@state/store';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { initializeGTag } from '@lib/google';
import { GOOGLE_TAG_ID } from '@lib/constants';
import TagManager from 'react-gtm-module';
initializeGTag();
const ToplyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: GOOGLE_TAG_ID });
  }, []);

  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
};

export default ToplyApp;

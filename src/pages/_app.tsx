import '../styles/globals.css';
import '@fontsource/poppins';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { store } from '@state/store';
import { Provider } from 'react-redux';
import GoogleAnalytics from '@modules/google/components/google-analytics';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { initializeGTag } from '@lib/google';

const ToplyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    initializeGTag();
  }, []);

  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <GoogleAnalytics />
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
};

export default ToplyApp;

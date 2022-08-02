import '../styles/globals.css';
import '@fontsource/poppins';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { store } from '@state/store';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { initializeGTag, trackGAEvent } from '@lib/google';
import { GOOGLE_TAG_ID } from '@lib/constants';
import TagManager from 'react-gtm-module';
import { useRouter } from 'next/router';
import GoogleAnalytics from '@modules/google/components/google-analytics';

const ToplyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useEffect(() => {
    //initializeGTag();
    TagManager.initialize({ gtmId: GOOGLE_TAG_ID });
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      trackGAEvent('pageView', {
        page: url,
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <GoogleAnalytics />
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
};

export default ToplyApp;

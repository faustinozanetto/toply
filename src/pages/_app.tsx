import '../styles/globals.css';
import '@fontsource/poppins';

import { GOOGLE_TAG_ID } from '@lib/constants';
import { trackGAEvent } from '@lib/google';
import GoogleAnalytics from '@modules/google/components/google-analytics';
import SelectedSongProvider from '@modules/selected-item/context/selected-song-context';
import { store } from '@state/store';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import { Provider } from 'react-redux';

type IToplyAppProps = AppProps & {
  session: Session;
};

const ToplyApp: React.FC<IToplyAppProps> = (props) => {
  const { Component, session, pageProps } = props;
  const router = useRouter();
  useEffect(() => {
    // initializeGTag();
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
      <SessionProvider session={session} refetchInterval={0}>
        <SelectedSongProvider>
          <GoogleAnalytics />
          <Component {...pageProps} />
        </SelectedSongProvider>
      </SessionProvider>
    </Provider>
  );
};

export default ToplyApp;

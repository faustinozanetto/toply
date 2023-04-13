import '../styles/globals.css';

import GoogleAnalytics from '@modules/google/components/google-analytics';
import type { AppProps } from 'next/app';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

type IToplyAppProps = AppProps & {
  session: Session;
};

const ToplyApp: React.FC<IToplyAppProps> = (props) => {
  const { Component, session, pageProps } = props;

  return (
    <SessionProvider session={session} refetchInterval={0}>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default ToplyApp;

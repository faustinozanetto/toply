import '../styles/globals.css';
import '@fontsource/poppins';

import CustomizationProvider from '@modules/customization/context/customization-context';
import DashboardProvider from '@modules/dashboard/context/dashboard-context';
import GoogleAnalytics from '@modules/google/components/google-analytics';
import SelectedSongProvider from '@modules/selected-item/context/selected-song-context';
import type { AppProps } from 'next/app';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

type IToplyAppProps = AppProps & {
  session: Session;
};

const ToplyApp: React.FC<IToplyAppProps> = (props) => {
  const { Component, session, pageProps } = props;

  return (
    <CustomizationProvider>
      <DashboardProvider>
        <SessionProvider session={session} refetchInterval={0}>
          <SelectedSongProvider>
            <GoogleAnalytics />
            <Component {...pageProps} />
          </SelectedSongProvider>
        </SessionProvider>
      </DashboardProvider>
    </CustomizationProvider>
  );
};

export default ToplyApp;

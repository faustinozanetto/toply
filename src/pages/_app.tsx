import '../styles/globals.css';

import { UserCustomizationProvider } from '@modules/customization/context/user-customization-context';
import GoogleAnalytics from '@modules/google/components/google-analytics';
import { ToastsContainer } from '@modules/ui/components/toasts/components/toasts-container';
import { ToastProvider } from '@modules/ui/components/toasts/context/toast-context';
import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

const PoppinsFont = Poppins({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

type IToplyAppProps = AppProps & {
  session: Session;
};

const ToplyApp: React.FC<IToplyAppProps> = (props) => {
  const { Component, session, pageProps } = props;

  return (
    <div className={`${PoppinsFont.variable} scroll-smooth font-sans`}>
      <UserCustomizationProvider>
        <SessionProvider session={session} refetchInterval={0}>
          <ToastProvider>
            <GoogleAnalytics />
            <Component {...pageProps} />
            <ToastsContainer />
          </ToastProvider>
        </SessionProvider>
      </UserCustomizationProvider>
    </div>
  );
};

export default ToplyApp;

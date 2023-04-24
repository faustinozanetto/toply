import '../styles/globals.css';

import { AuthProvider } from '@modules/auth/context/auth-context';
import { UserCustomizationProvider } from '@modules/customization/context/user-customization-context';
import GoogleAnalytics from '@modules/google/components/google-analytics';
import { ToastsContainer } from '@modules/ui/components/toasts/components/toasts-container';
import { ToastProvider } from '@modules/ui/components/toasts/context/toast-context';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';

type ToplyAppProps = AppProps & {};

const ToplyApp: React.FC<ToplyAppProps> = (props) => {
  const { Component, pageProps } = props;

  return (
    <UserCustomizationProvider>
      <AuthProvider>
        <ToastProvider>
          <Component {...pageProps} />
          <Analytics />
          <GoogleAnalytics />
          <ToastsContainer />
        </ToastProvider>
      </AuthProvider>
    </UserCustomizationProvider>
  );
};

export default ToplyApp;

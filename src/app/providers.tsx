'use client';

import { UserCustomizationProvider } from '@modules/customization/components/user-customization-provider';
import GoogleAnalytics from '@modules/google/components/google-analytics';
import { ToastsContainer } from '@modules/ui/components/toasts/components/toasts-container';
import { ToastProvider } from '@modules/ui/components/toasts/context/toast-context';
import { Analytics } from '@vercel/analytics/react';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = (props) => {
  const { children } = props;

  return (
    <ToastProvider>
      <SessionProvider>
        <UserCustomizationProvider>
          {children}
          <Analytics />
          <GoogleAnalytics />
          <ToastsContainer />
        </UserCustomizationProvider>
      </SessionProvider>
    </ToastProvider>
  );
};

export default Providers;

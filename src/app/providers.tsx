'use client';

import { UserCustomizationProvider } from '@modules/customization/components/user-customization-provider';
import GoogleAnalytics from '@modules/google/components/google-analytics';
import { ToastsContainer } from '@modules/ui/components/toasts/components/toasts-container';
import { ToastProvider } from '@modules/ui/components/toasts/context/toast-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Analytics } from '@vercel/analytics/react';
import React from 'react';

interface ProvidersProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const Providers: React.FC<ProvidersProps> = (props) => {
  const { children } = props;

  return (
    <ToastProvider>
      <UserCustomizationProvider>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        <Analytics />
        <GoogleAnalytics />
        <ToastsContainer />
      </UserCustomizationProvider>
    </ToastProvider>
  );
};

export default Providers;

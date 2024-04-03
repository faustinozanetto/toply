'use client';

import { useCustomization } from '@modules/customization/hooks/use-customization';
import Footer from '@modules/footer/components/footer';
import React from 'react';

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = (props) => {
  const { children } = props;

  const { state } = useCustomization();

  return (
    <main
      className="flex min-h-screen flex-col"
      style={{
        background: state.background,
      }}
    >
      <div className="mx-auto flex w-full max-w-xl flex-1 flex-col p-4 sm:px-6 md:px-8">{children}</div>
      <Footer />
    </main>
  );
};

export default HomeLayout;

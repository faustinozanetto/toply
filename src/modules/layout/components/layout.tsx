import { useUserCustomizationContext } from '@modules/customization/context/user-customization-context';
import Footer from '@modules/footer/components/footer';
import type { ReactNode } from 'react';
import React from 'react';

import LayoutHead from './layout-head';

type LayoutProps = {
  children: ReactNode;
  /** Optional: head props used for seo data. */
  headProps?: React.ComponentPropsWithoutRef<typeof LayoutHead>;
};

const Layout: React.FC<LayoutProps> = (props) => {
  const { children, headProps } = props;
  const { state: customizationState } = useUserCustomizationContext();

  return (
    <main
      className="flex min-h-screen flex-col overflow-hidden subpixel-antialiased"
      style={{ background: customizationState.background }}
    >
      {/* Header */}
      <LayoutHead {...headProps} />
      {/* Content */}
      <div className="mx-auto flex w-full max-w-xl flex-1 flex-col p-4 sm:px-6 md:px-8">
        {/* Children */}
        {children}
      </div>
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Layout;

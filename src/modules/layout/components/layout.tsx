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

  return (
    <main className="flex min-h-screen flex-col items-center bg-neutral-100 dark:bg-neutral-900">
      {/* Header */}
      <LayoutHead {...headProps} />
      {/* Content */}
      <div className="flex max-w-2xl flex-1 flex-col items-center">{children}</div>
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Layout;

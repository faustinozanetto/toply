import Footer from '@modules/footer/components/footer';
import React from 'react';
import LayoutHead from './layout-head';

interface ILayoutProps {
  children?: React.ReactNode;
  headProps?: React.ComponentPropsWithoutRef<typeof LayoutHead>;
}

const Layout: React.FC<ILayoutProps> = (props) => {
  const { children, headProps } = props;

  return (
    <div className='flex flex-col min-h-screen font-mono bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
      {/* Head */}
      <LayoutHead {...headProps} />

      {/* Content */}
      <div className='flex flex-col flex-1'>{children}</div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;

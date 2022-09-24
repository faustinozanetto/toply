import Footer from '@modules/footer/components/footer';
import { selectBackgroundColor } from '@state/slices/app.slice';
import React from 'react';
import { useSelector } from 'react-redux';

import LayoutHead from './layout-head';

interface ILayoutProps {
  children?: React.ReactNode;
  headProps?: React.ComponentPropsWithoutRef<typeof LayoutHead>;
}

const Layout: React.FC<ILayoutProps> = (props) => {
  const { children, headProps } = props;
  const backgroundColor = useSelector(selectBackgroundColor);

  return (
    <div
      className="flex min-h-screen flex-col overflow-hidden font-poppins subpixel-antialiased transition-all"
      style={{ background: backgroundColor }}
    >
      {/* Head */}
      <LayoutHead {...headProps} />

      {/* Content */}
      <div className="flex flex-1 flex-col p-4 sm:px-6 md:px-8">
        <main className="mx-auto w-full max-w-xl">
          {/* Title */}
          <div className="mb-4 flex w-full flex-col rounded-lg bg-red-400 p-4 drop-shadow-2xl">
            <h1 className="text-3xl font-black text-gray-100">Toply</h1>
          </div>
          {/* Children */}
          {children}
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;

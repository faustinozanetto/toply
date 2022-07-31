import Footer from '@modules/footer/components/footer';
import { selectBackgroundColor } from '@state/slices/toply.slice';
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
      className="flex flex-col min-h-screen font-poppins overflow-hidden subpixel-antialiased transition-all"
      style={{ background: backgroundColor }}
    >
      {/* Head */}
      <LayoutHead {...headProps} />

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 sm:px-6 md:px-8">
        <main className="max-w-xl mx-auto w-full">
          {/* Title */}
          <div
            className="flex flex-col w-full p-4 mb-4 rounded-lg drop-shadow-2xl"
            style={{
              background: 'linear-gradient(to right, rgb(190, 18, 60), rgb(219, 39, 119))',
            }}
          >
            <h1 className="text-3xl font-black text-white">Toply</h1>
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

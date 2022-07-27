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
    <div className='flex flex-col min-h-screen font-poppins overflow-hidden subpixel-antialiased bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
      {/* Head */}
      <LayoutHead {...headProps} />

      {/* Content */}
      <div className='flex flex-col flex-1 p-4 sm:px-6 md:px-8'>
        <main className='max-w-xl mx-auto'>
          {/* Title */}
          <div
            className='flex flex-col w-full p-4 mb-4 rounded-lg drop-shadow-2xl'
            style={{
              background:
                'linear-gradient(to right, rgb(202, 138, 4), rgb(220, 38, 38))',
            }}
          >
            <h1 className='text-4xl font-black text-white'>Toply</h1>
          </div>
          {/* Children */}
          {children}
        </main>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;

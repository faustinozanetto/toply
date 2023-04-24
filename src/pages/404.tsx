import Layout from '@modules/layout/components/layout';
import { Button } from '@modules/ui/components/button/button';
import Link from 'next/link';
import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <Layout
      headProps={{
        title: 'Not Found | Toply',
        description: 'Toply is web app for generating a cool showcase of your top songs and artists from Spotify.',
      }}
    >
      <div className="mb-4 flex flex-col items-center rounded-lg bg-neutral-100 p-4 shadow-xl">
        <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">Page Not Found</h2>
      </div>
      <div className="flex flex-col items-center rounded-lg bg-neutral-100 p-4 shadow-xl">
        <p className="mb-4 text-lg text-neutral-900">
          The page you requested seems like it does not exist! If you think this might be a mistake, please contact us
          to solve the issue, Toply Team.
        </p>
        <Link href="/" className="w-full">
          <Button className="w-full">Go Home</Button>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

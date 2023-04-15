import Layout from '@modules/layout/components/layout';
import UserTops from '@modules/user-tops/components/user-tops';
import { UserTopsProvider } from '@modules/user-tops/context/user-tops-context';
import { signIn, useSession } from 'next-auth/react';
import React, { useEffect } from 'react';

const HomePage: React.FC = () => {
  const { data, status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') signIn();
  }, [data, status]);

  return (
    <Layout
      headProps={{
        title: 'Home | Toply',
        description: 'Toply is web app for generating a cool showcase of your top songs and artists from Spotify.',
      }}
    >
      <UserTopsProvider>
        <UserTops />
      </UserTopsProvider>
    </Layout>
  );
};

export default HomePage;

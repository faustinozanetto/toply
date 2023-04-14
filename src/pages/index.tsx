import Layout from '@modules/layout/components/layout';
import UserTops from '@modules/user-tops/components/user-tops';
import { UserTopsProvider } from '@modules/user-tops/context/user-tops-context';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
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
      {/* User Tops Main Component */}
      <UserTopsProvider>
        <UserTops />
      </UserTopsProvider>
    </Layout>
  );
};

export default HomePage;

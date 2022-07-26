import Dashboard from '@modules/dashboard/components/dashboard';
import Layout from '@modules/layout/components/layout';
import HomeView from '@views/home/home-view';
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

const HomePage: React.FC = (props) => {
  const {} = props;
  const { data: session } = useSession();

  return (
    <Layout
      headProps={{
        title: 'Home | Toply',
        description:
          'Toply is web app for generating a cool showcase of your top songs and artists from Spotify.',
      }}
    >
      <HomeView />
    </Layout>
  );
};

export default HomePage;

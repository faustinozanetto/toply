import useUserTops from '@hooks/use-user-tops';
import { trackPageView } from '@lib/google';
import Layout from '@modules/layout/components/layout';
import HomeView from '@views/home/home-view';
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';

const HomePage: React.FC = () => {
  const { status: sessionStatus } = useSession();
  const userTops = useUserTops();

  useEffect(() => {
    trackPageView('home');
  }, []);

  // Fetch songs on load
  useEffect(() => {
    const fetchSongs = async () => {
      await userTops.fetchTops();
    };

    if (sessionStatus === 'authenticated') {
      fetchSongs();
    }
  }, [sessionStatus]);

  return (
    <Layout
      headProps={{
        title: 'Home | Toply',
        description: 'Toply is web app for generating a cool showcase of your top songs and artists from Spotify.',
      }}
    >
      <HomeView />
    </Layout>
  );
};

export default HomePage;

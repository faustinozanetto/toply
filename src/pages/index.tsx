import Layout from '@modules/layout/components/layout';
import { SpotifyTrackType } from '@types/toply.typesdefs';
import HomeView from '@views/home/home-view';
import { useSession } from 'next-auth/react';
import { GetServerSideProps } from 'next/types';
import React, { useEffect, useState } from 'react';

const HomePage: React.FC = (props) => {
  const {} = props;
  const [data, setData] = useState<SpotifyTrackType[]>([]);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'authenticated') {
      const data = fetch('/api/user/top-songs')
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, [session]);

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

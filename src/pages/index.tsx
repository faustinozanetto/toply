import Layout from '@modules/layout/components/layout';
import { setTopSongs } from '@state/slices/toply.slice';
import { SpotifyTrackType } from '@typedefs/toply.typesdefs';
import HomeView from '@views/home/home-view';
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const HomePage: React.FC = (props) => {
  const {} = props;
  const { data: session, status } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/user/top-songs')
        .then((res) => res.json())
        .then((data) => {
          dispatch(setTopSongs(data as SpotifyTrackType[]));
        });
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

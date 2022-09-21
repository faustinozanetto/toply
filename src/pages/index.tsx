import { MAX_TRACKS } from '@lib/constants';
import { trackPageView } from '@lib/google';
import spotifyApi from '@lib/spotify-api';
import { parseTopSongs } from '@lib/spotify-helper';
import Layout from '@modules/layout/components/layout';
import { selectTimeSpan, setSongs } from '@state/slices/toply.slice';
import type { SpotifyTrackType } from '@typedefs/toply.typesdefs';
import HomeView from '@views/home/home-view';
import type { GetServerSideProps } from 'next';
import { unstable_getServerSession } from 'next-auth/next';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { authOptions } from './api/auth/[...nextauth]';

interface IHomePageProps {
  songs: SpotifyTrackType[];
}

const HomePage: React.FC<IHomePageProps> = (props) => {
  const { songs } = props;
  const dispatch = useDispatch();
  const timeSpan = useSelector(selectTimeSpan);

  useEffect(() => {
    trackPageView('home');
  }, []);

  useEffect(() => {
    if (songs.length > 0) {
      dispatch(setSongs({ songs, timeSpan }));
    }
  }, []);

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);

  // If not logged in, redirect to login page
  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }

  // If we are logged in, we fetch the top songs.
  // Redirect if session error.
  if (session?.error === 'RefreshAccessTokenError') {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }

  spotifyApi.setAccessToken(session?.user?.accessToken!);

  // Fetch the top songs
  let songs: SpotifyTrackType[] = [];
  if (spotifyApi.getAccessToken()) {
    await spotifyApi.getMyTopTracks({ limit: MAX_TRACKS, time_range: 'short_term' }).then((data) => {
      songs = parseTopSongs(data.body);
    });
  }

  return {
    props: { songs },
  };
};

export default HomePage;

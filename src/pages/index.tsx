import useUserTops from '@hooks/use-user-tops';
import { MAX_TRACKS } from '@lib/constants';
import { trackPageView } from '@lib/google';
import spotifyApi from '@lib/spotify-api';
import { parseTopSongs } from '@lib/spotify-helper';
import Layout from '@modules/layout/components/layout';
import { setSongs } from '@state/slices/top-songs.slice';
import type { SpotifyTrackType } from '@typedefs/toply.typesdefs';
import { ToplyDataTimeStapEnum, ToplyTopItemsEnum } from '@typedefs/toply.typesdefs';
import HomeView from '@views/home/home-view';
import type { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

interface IHomePageProps {
  songs: SpotifyTrackType[];
}

const HomePage: React.FC<IHomePageProps> = (props) => {
  const { songs } = props;
  const dispatch = useDispatch();
  const { topTimeSpan, setTopType, setTimeSpan } = useUserTops();

  useEffect(() => {
    trackPageView('home');

    if (songs.length > 0) {
      dispatch(setSongs({ songs, timeSpan: topTimeSpan }));
      setTopType(ToplyTopItemsEnum.SONGS);
      setTimeSpan(ToplyDataTimeStapEnum.MONTH);
    }
  }, [songs]);

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
  const session = await getSession(context);

  // If not logged in, redirect to login page
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
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

import useSpotify from '@hooks/use-spotify';
import { MAX_TRACKS } from '@lib/constants';
import { trackPageView } from '@lib/google';
import spotifyApi from '@lib/spotify-api';
import { parseTimeSpan, parseTopSongs } from '@lib/spotify-helper';
import Layout from '@modules/layout/components/layout';
import Button from '@modules/ui/components/button/button';
import { selectSongsTimeSpan, setSongs } from '@state/slices/top-songs.slice';
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
  const spotifyAPI = useSpotify();
  const timeSpan = useSelector(selectSongsTimeSpan);

  useEffect(() => {
    trackPageView('home');
  }, []);

  useEffect(() => {
    if (songs.length > 0) {
      dispatch(setSongs({ songs, timeSpan }));
    }
  }, []);

  const handleTopArtists = async () => {
    if (spotifyAPI.getAccessToken()) {
      const timeRange = parseTimeSpan(timeSpan);
      // If we already have fetched the songs before we do nothing, otherwise we fetch.
      await spotifyAPI
        .getMyTopArtists({ limit: MAX_TRACKS, time_range: timeRange })
        .then((data) => {
          console.log(data);
        })
        .finally(() => {});
    }
  };

  return (
    <Layout
      headProps={{
        title: 'Home | Toply',
        description: 'Toply is web app for generating a cool showcase of your top songs and artists from Spotify.',
      }}
    >
      <HomeView />
      <Button onClick={handleTopArtists}>Top Artist</Button>
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

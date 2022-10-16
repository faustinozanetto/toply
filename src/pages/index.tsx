import { MAX_TRACKS } from '@lib/constants';
import { trackPageView } from '@lib/google';
import spotifyApi from '@lib/spotify-api';
import { parseTopSongs } from '@lib/spotify-helper';
import { useCustomizationContext } from '@modules/customization/context/customization-context';
import { CustomizationActionType } from '@modules/customization/context/types';
import { useDashboardContext } from '@modules/dashboard/context/dashboard-context';
import { DashboardActionType } from '@modules/dashboard/context/types';
import Layout from '@modules/layout/components/layout';
import type { SpotifyTrackType } from '@typedefs/toply.typesdefs';
import { ToplyDataTimeSpanEnum, ToplyTopItemsEnum } from '@typedefs/toply.typesdefs';
import HomeView from '@views/home/home-view';
import type { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import React, { useEffect } from 'react';

interface IHomePageProps {
  songs: SpotifyTrackType[];
}

const HomePage: React.FC<IHomePageProps> = (props) => {
  const { songs } = props;
  const { state: customizationState, dispatch: customizationDispatch } = useCustomizationContext();
  const { dispatch: dashboardDispatch } = useDashboardContext();

  useEffect(() => {
    trackPageView('home');

    if (songs.length > 0) {
      dashboardDispatch({
        type: DashboardActionType.SET_SONGS,
        payload: {
          songs: {
            timeSpan: customizationState.topTimeSpan,
            data: songs,
          },
        },
      });
      customizationDispatch({
        type: CustomizationActionType.SET_TIME_SPAN,
        payload: {
          topTimeSpan: ToplyDataTimeSpanEnum.MONTH,
        },
      });
      customizationDispatch({
        type: CustomizationActionType.SET_TOP_TYPE,
        payload: {
          topType: ToplyTopItemsEnum.SONGS,
        },
      });
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

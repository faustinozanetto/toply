import { useAuthContext } from '@modules/auth/context/auth-context';
import { AuthActionType } from '@modules/auth/context/reducer/types';
import { getSpotifyUserDetails } from '@modules/auth/lib/auth.lib';
import Layout from '@modules/layout/components/layout';
import UserTops from '@modules/user-tops/components/user-tops';
import { getTopTracks, USER_TOPS_MAX_RESULTS } from '@modules/user-tops/lib/user-tops.lib';
import type { Track } from '@modules/user-tops/types/user-tops.types';
import type { GetServerSideProps, Redirect } from 'next';
import React, { useEffect } from 'react';

type HomePageProps = {
  username: string;
  topTracks: Track[];
};

const HomePage: React.FC<HomePageProps> = (props) => {
  const { topTracks, username } = props;
  const { dispatch } = useAuthContext();

  useEffect(() => {
    dispatch({ type: AuthActionType.SIGNIN, payload: { username } });
  }, []);

  return (
    <Layout
      headProps={{
        title: 'Home | Toply',
        description: 'Toply is web app for generating a cool showcase of your top songs and artists from Spotify.',
      }}
    >
      <UserTops topTracks={topTracks} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { accessToken } = context.req.cookies;

  const notFoundResult: { redirect: Redirect } = {
    redirect: {
      destination: '/auth/signin',
      permanent: false,
    },
  };

  if (accessToken === undefined) {
    return notFoundResult;
  }

  try {
    const userData = await getSpotifyUserDetails(accessToken);
    const topTracks = await getTopTracks(accessToken, 'short_term', USER_TOPS_MAX_RESULTS);

    return {
      props: {
        username: userData.username,
        topTracks,
      },
    };
  } catch (error) {
    if (error instanceof Error) {
      return notFoundResult;
    }
  }

  return {
    props: {},
  };
};

export default HomePage;

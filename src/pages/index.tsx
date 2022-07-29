import { trackPageView } from '@lib/google';
import Layout from '@modules/layout/components/layout';
import HomeView from '@views/home/home-view';
import { GetServerSideProps } from 'next';
import { unstable_getServerSession } from 'next-auth/next';
import React, { useEffect } from 'react';
import { authOptions } from './api/auth/[...nextauth]';

const HomePage: React.FC = (props) => {
  const {} = props;

  useEffect(() => {
    trackPageView('home');
  }, []);

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  // If not logged in, redirect to login page
  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default HomePage;

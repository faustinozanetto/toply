import Layout from '@modules/layout/components/layout';
import HomeView from '@views/home/home-view';
import React from 'react';

const HomePage: React.FC = (props) => {
  const {} = props;
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

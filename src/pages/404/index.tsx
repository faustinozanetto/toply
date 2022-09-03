import { trackPageView } from '@lib/google';
import Layout from '@modules/layout/components/layout';
import NotFoundView from '@views/not-found/not-found-view';
import React, { useEffect } from 'react';

interface INotFoundPageProps {}

const NotFoundPage: React.FC<INotFoundPageProps> = (props) => {
  const {} = props;

  useEffect(() => {
    trackPageView('notfound');
  }, []);

  return (
    <Layout
      headProps={{
        title: '404 | Toply',
        description: 'Toply is web app for generating a cool showcase of your top songs and artists from Spotify.',
      }}
    >
      <NotFoundView />
    </Layout>
  );
};

export default NotFoundPage;

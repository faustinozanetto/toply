import { trackPageView } from '@lib/google';
import Layout from '@modules/layout/components/layout';
import AboutView from '@views/about/about-view';
import React, { useEffect } from 'react';

interface IAboutPageProps {}

const AboutPage: React.FC<IAboutPageProps> = (props) => {
  const {} = props;

  useEffect(() => {
    trackPageView('about');
  }, []);

  return (
    <Layout
      headProps={{
        title: 'About | Toply',
        description: 'Toply is web app for generating a cool showcase of your top songs and artists from Spotify.',
      }}
    >
      <AboutView />
    </Layout>
  );
};

export default AboutPage;

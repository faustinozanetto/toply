import { trackPageView } from '@lib/google';
import Layout from '@modules/layout/components/layout';
import PrivacyView from '@views/privacy/privacy-view';
import React, { useEffect } from 'react';

interface IPrivacyPageProps {}

const PrivacyPage: React.FC<IPrivacyPageProps> = (props) => {
  const {} = props;

  useEffect(() => {
    trackPageView('privacy');
  }, []);

  return (
    <Layout
      headProps={{
        title: 'Privacy | Toply',
        description:
          'Toply is web app for generating a cool showcase of your top songs and artists from Spotify.',
      }}
    >
      <PrivacyView />
    </Layout>
  );
};

export default PrivacyPage;

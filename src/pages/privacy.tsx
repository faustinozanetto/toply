import Layout from '@modules/layout/components/layout';
import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <Layout
      headProps={{
        title: 'Privacy | Toply',
        description: 'Toply is web app for generating a cool showcase of your top songs and artists from Spotify.',
      }}
    >
      <div className="flex w-full flex-col justify-center space-y-2 rounded-lg bg-neutral-50 p-4 md:space-y-4">
        <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">Privacy</h2>
        <p className="text-neutral-900 md:text-lg">
          Toply was developed using Spotify API and no other external service. By using Toply, you agree to display your
          name and the most listened songs on Spotify in the page.
        </p>
        <p className="text-neutral-900 md:text-lg">
          It is important to note that Toply <strong>will not</strong> store nor use your personal data in any harmful
          and unwanted way. We only fetch your username and top artists from the Spotify API.
        </p>
      </div>
    </Layout>
  );
};

export default PrivacyPage;

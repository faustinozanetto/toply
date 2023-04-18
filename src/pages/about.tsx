import Layout from '@modules/layout/components/layout';
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <Layout
      headProps={{
        title: 'About | Toply',
        description: 'Toply is web app for generating a cool showcase of your top songs and artists from Spotify.',
      }}
    >
      <div className="flex w-full flex-col justify-center space-y-2 rounded-lg bg-neutral-50 p-4 md:space-y-4">
        <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">About</h2>
        <p className="text-neutral-900 md:text-lg">
          Toply is a web application that lets you see the most listened songs on Spotify. It is simple and free to use,
          and it is also capable of generating a picture of your top songs that can be shared in your social media.
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;

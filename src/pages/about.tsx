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
      <div className="mb-4 flex flex-col items-center rounded-lg bg-neutral-100 p-4 shadow-xl">
        <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">About</h2>
      </div>
      <div className="flex flex-col items-center rounded-lg bg-neutral-100 p-4 shadow-xl">
        <p className="text-neutral-900 md:text-lg">
          Toply is a web application that lets you see the most listened songs on Spotify. It is simple and free to use,
          and it is also capable of generating a picture of your top songs that can be shared in your social media.
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;

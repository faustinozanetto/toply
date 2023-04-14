import UserCustomization from '@modules/customization/components/user-customization';
import ImageExport from '@modules/image-export/components/image-export';
import Layout from '@modules/layout/components/layout';
import UserTops from '@modules/user-tops/components/user-tops';
import { UserTopsProvider } from '@modules/user-tops/context/user-tops-context';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <Layout
      headProps={{
        title: 'Home | Toply',
        description: 'Toply is web app for generating a cool showcase of your top songs and artists from Spotify.',
      }}
    >
      {/* User Tops Main Component */}
      <UserTopsProvider>
        <UserTops />
      </UserTopsProvider>
    </Layout>
  );
};

export default HomePage;

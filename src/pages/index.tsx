import Layout from '@modules/layout/components/layout';
import Button from '@modules/ui/components/button/button';
import useUserTops from '@modules/user-tops/hooks/user-user-tops';
import type { SpotifyTrackType } from '@typedefs/toply.typesdefs';
import { signIn, useSession } from 'next-auth/react';
import React, { useEffect } from 'react';

interface IHomePageProps {
  songs: SpotifyTrackType[];
}

const HomePage: React.FC<IHomePageProps> = (props) => {
  const {} = props;
  const { data } = useSession();
  const { getTopTracks, getTopArtists } = useUserTops();

  useEffect(() => {
    const fetch = async () => {
      try {
        const data2 = await getTopTracks('medium_term', 9);
        console.log({ data2 });
      } catch (err) {
        console.log({ err });
      }
    };
    fetch();
  }, [data]);

  return (
    <Layout
      headProps={{
        title: 'Home | Toply',
        description: 'Toply is web app for generating a cool showcase of your top songs and artists from Spotify.',
      }}
    >
      {JSON.stringify(data)}
      <Button onClick={() => signIn()}>Sign In</Button>
    </Layout>
  );
};

export default HomePage;

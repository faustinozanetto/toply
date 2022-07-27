import spotifyApi from '@lib/spotify-api';
import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';

const useSpotify = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session && session.user) {
      if (session.error === 'RefreshAccessTokenError') {
        signIn();
      }
      // @ts-ignore
      spotifyApi.setAccessToken(session.user.accessToken);
    }
  }, [session]);

  return spotifyApi;
};

export default useSpotify;

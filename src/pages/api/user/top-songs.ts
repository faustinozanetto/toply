import { NEXTAUTH_SECRET, SPOTIFY_API } from '@lib/constants';
import { fetchSpotifyEndpoint } from '@lib/spotify-helper';
import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import { getSession } from 'next-auth/react';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const apiURL = `me/top/tracks`;
  const session = await getSession({ req });
  const data = await fetchSpotifyEndpoint(apiURL, session?.user.accessToken);
  console.log(data);
  res.status(200).json(data);
};

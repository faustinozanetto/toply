import { NEXTAUTH_SECRET, SPOTIFY_API } from '@lib/constants';
import { getUserTopTracks } from '@lib/spotify-helper';
import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import { getSession } from 'next-auth/react';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const apiURL = `${SPOTIFY_API}/me/top/tracks`;
  const token = await getToken({ req, secret: NEXTAUTH_SECRET });
  console.log(token);
  if (token) {
    // Signed in
    console.log('JSON Web Token', JSON.stringify(token, null, 2));
  }
  res.send(`<h1>Hello World</h1>`);
};

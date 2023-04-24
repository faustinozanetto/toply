import { ACCESS_TOKEN_COOKIE, getSpotifyTokens, TOKEN_DURATION } from '@modules/auth/lib/auth.lib';
import type { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from 'nookies';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { code } = req.query;
    try {
      const { codeVerifier } = req.cookies;
      if (codeVerifier === undefined) return res.status(500).send('Could not get code verifier!');

      const { accessToken } = await getSpotifyTokens(code as string, codeVerifier);

      setCookie({ res }, ACCESS_TOKEN_COOKIE, accessToken, {
        httpOnly: true,
        secure: true,
        path: '/',
        maxAge: TOKEN_DURATION,
      });
      res.redirect('/');
    } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500).send('Error getting tokens from code');
    }
  } else {
    res.status(405).send('Method not allowed');
  }
}

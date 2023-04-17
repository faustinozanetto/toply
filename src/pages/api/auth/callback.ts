import { getSpotifyTokens } from '@modules/auth/lib/auth.lib';
import { serialize } from 'cookie';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { code } = req.query;
    try {
      const { codeVerifier } = req.cookies;
      if (codeVerifier === undefined) return res.status(500).send('Could not get code verifier!');

      const { accessToken } = await getSpotifyTokens(code as string, codeVerifier);
      const accessTokenCookie = serialize('accessToken', accessToken, {
        httpOnly: true,
        secure: true,
        path: '/',
      });

      res.setHeader('Set-Cookie', accessTokenCookie);
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

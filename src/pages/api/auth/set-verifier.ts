import { CODE_VERIFIER_COOKIE, TOKEN_DURATION } from '@modules/auth/lib/auth.lib';
import type { NextApiRequest, NextApiResponse } from 'next';
import nookies from 'nookies';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { code } = req.body;
    try {
      if (code === undefined || typeof code !== 'string') return res.status(500).send('Could not get code verifier!');

      nookies.set({ res }, CODE_VERIFIER_COOKIE, code as string, {
        httpOnly: true,
        secure: true,
        path: '/',
        maxAge: TOKEN_DURATION,
      });

      res.status(200).send({ success: true });
    } catch (error) {
      res.status(500).send({ success: false });
    }
  } else {
    res.status(405).send('Method not allowed');
  }
}

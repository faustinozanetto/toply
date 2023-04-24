import { ACCESS_TOKEN_COOKIE, CODE_VERIFIER_COOKIE } from '@modules/auth/lib/auth.lib';
import type { NextApiRequest, NextApiResponse } from 'next';
import nookies from 'nookies';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      nookies.destroy({ res }, ACCESS_TOKEN_COOKIE, { path: '/' });
      nookies.destroy({ res }, CODE_VERIFIER_COOKIE, { path: '/' });
      res.status(200).send({ success: true });
    } catch (error) {
      res.status(500).send({ success: false });
    }
  } else {
    res.status(405).send('Method not allowed');
  }
}

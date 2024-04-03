import { __PROD__ } from '@modules/common/lib/common.constants';
import type { NextAuthOptions } from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';

const COOKIES_PREFIX = 'toply';

export const authOptions: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.AUTH_SPOTIFY_CLIENT_ID!,
      clientSecret: process.env.AUTH_SPOTIFY_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: 'user-top-read',
        },
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    jwt({ token, account }) {
      if (account) token.access_token = account.access_token;
      return token;
    },
    session({ session, token }) {
      session.access_token = token.access_token as string;

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET!,
  pages: {
    signIn: '/sign-in',
  },
  cookies: {
    sessionToken: {
      name: `${COOKIES_PREFIX}.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: __PROD__,
      },
    },
    callbackUrl: {
      name: `${COOKIES_PREFIX}.callback-url`,
      options: {
        sameSite: 'lax',
        path: '/',
        secure: __PROD__,
      },
    },
    csrfToken: {
      name: `${COOKIES_PREFIX}.csrf-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: __PROD__,
      },
    },
    pkceCodeVerifier: {
      name: `${COOKIES_PREFIX}.pkce.code_verifier`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: __PROD__,
      },
    },
    state: {
      name: `${COOKIES_PREFIX}.state`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: __PROD__,
      },
    },
  },
};

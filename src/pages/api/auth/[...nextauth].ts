import { NEXTAUTH_SECRET, SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from '@lib/constants';
import spotifyApi, { LOGIN_URL } from '@lib/spotify-api';
import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import type { JWT } from 'next-auth/jwt';
import SpotifyProvider from 'next-auth/providers/spotify';

async function refreshAccessToken(token: JWT) {
  try {
    if (token.accessToken && token.refreshToken) {
      spotifyApi.setAccessToken(token.accessToken);
      spotifyApi.setRefreshToken(token.refreshToken);
    }

    const { body: refreshedToken } = await spotifyApi.refreshAccessToken();

    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    console.log(error);

    return {
      ...token,
      error: 'RefreshAccessTokenError',
    };
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: SPOTIFY_CLIENT_ID,
      clientSecret: SPOTIFY_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
  ],
  // Callbacks Configuration
  callbacks: {
    async jwt({ token, account, user }) {
      // initial Signin
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          accessTokenExpires: account.expires_at! * 1000,
        };
      }

      // Return previous token if the access token has not expired
      if (Date.now() < token?.accessTokenExpires!) {
        return token;
      }

      // Access token expired, time to refresh it
      return refreshAccessToken(token);
    },
    async session({ session, token }) {
      if (session && session.user) {
        session.user.accessToken = token?.accessToken!;
        session.user.refreshToken = token?.refreshToken!;
      }
      return session;
    },
  },

  // Session Configuration
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },

  jwt: {
    maxAge: 60 * 60 * 24 * 30,
  },

  pages: {
    signIn: '/signin',
  },

  // Secret Configuration
  secret: NEXTAUTH_SECRET,

  // Cookie Configuration
  cookies: {
    sessionToken: {
      name: `toply.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: true,
      },
    },
    callbackUrl: {
      name: `toply.callback-url`,
      options: {
        sameSite: 'lax',
        path: '/',
        secure: true,
      },
    },
    csrfToken: {
      name: `toply.csrf-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: true,
      },
    },
    pkceCodeVerifier: {
      name: `toply.pkce.code_verifier`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: true,
      },
    },
    state: {
      name: `toply.state`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: true,
      },
    },
  },
};

export default NextAuth(authOptions);

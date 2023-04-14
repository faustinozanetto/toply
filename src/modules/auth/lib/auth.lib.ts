import type { JWT } from 'next-auth/jwt';

const SPOTIFY_REFRESH_TOKEN_URL = 'https://accounts.spotify.com/api/token';
export const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;

export const requestSpotifyRefreshToken = async (token: JWT): Promise<JWT> => {
  try {
    console.log('requeested reefresh token');

    const basicAuth = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');

    const requestBody = new URLSearchParams();
    requestBody.append('grant_type', 'refresh_token');
    if (token.refreshToken) requestBody.append('refresh_token', token.refreshToken);

    const response = await fetch(SPOTIFY_REFRESH_TOKEN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${basicAuth}`,
      },
      body: requestBody,
    });

    if (!response.ok) {
      throw new Error('Failed to refresh access token');
    }

    const data = await response.json();

    return {
      ...token,
      accessToken: data.access_token,
      accessTokenExpires: Date.now() + data.expires_in * 1000,
    };
  } catch (error) {
    return {
      ...token,
      error: 'RefreshAccessTokenError',
    };
  }
};

import { BASIC, SPOTIFY_API, SPOTIFY_USER_TOKEN } from './constants';

export const getAccessToken = async (refreshToken: string) => {
  const response = await fetch(SPOTIFY_USER_TOKEN, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${BASIC}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refreshToken,
    }),
  });

  return response.json();
};

export const getUserTopTracks = async (refresh_token: string) => {
  const { access_token } = await getAccessToken(refresh_token);
  return fetch(`${SPOTIFY_API}/me/top/tracks`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

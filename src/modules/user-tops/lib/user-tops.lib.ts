import type { SpotifyTopTimeRange, Track } from '../types/user-tops.types';

export const USER_TOPS_MAX_RESULTS = 12;
export const SPOTIFY_SCOPES = ['user-top-read'];

export const constructSpotifyQueryParams = (apiScopes: string[]) => {
  const urlParams = {
    scope: apiScopes.join(','),
  };

  return new URLSearchParams(urlParams);
};

export const constructSpotifyAuthUrl = () => {
  const baseUrl = 'https://accounts.spotify.com';
  const params = {
    scope: SPOTIFY_SCOPES.join(','),
  };
  const queryParamString = new URLSearchParams(params);
  return `${baseUrl}/authorize?${queryParamString.toString()}`;
};

const fetchSpotifyEndpoint = async <T>(accessToken: string, endpoint: string, params?: URLSearchParams): Promise<T> => {
  if (!accessToken) throw new Error('Access token is invalid!');

  let finalUrl = endpoint;
  if (params) finalUrl = `${endpoint}?${params.toString()}`;

  const response = await fetch(finalUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  const parsed: T = await response.json();
  return parsed;
};

export const getTopTracks = async (accessToken: string, timeRange: SpotifyTopTimeRange, limit: number) => {
  const topTracksParams = new URLSearchParams();
  topTracksParams.append('time_range', timeRange);
  topTracksParams.append('limit', String(limit));
  const response = await fetchSpotifyEndpoint<{ items: Track[] }>(
    accessToken,
    'https://api.spotify.com/v1/me/top/tracks',
    topTracksParams
  );
  return response.items;
};

import type { SpotifyTopTimeRange, Track } from '../types/user-tops.types';

export const USER_TOPS_MAX_RESULTS = 12;

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
  if (!response.ok) {
    throw new Error('Could not fetch spotify API!');
  }

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

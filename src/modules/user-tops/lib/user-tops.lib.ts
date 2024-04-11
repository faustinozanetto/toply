import type { SpotifyTopTimeRange, Track } from '../types/user-tops.types';

export const USER_TOPS_MAX_RESULTS = 12;
const SPOTIFY_TOP_TRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/top/tracks';
export const SPOTIFY_TIME_RANGES = ['short_term', 'medium_term', 'long_term'] as const;

export const SPOTIFY_TIME_RANGES_NAMES: Record<SpotifyTopTimeRange, string> = {
  short_term: 'Short Term',
  medium_term: 'Medium Term',
  long_term: 'Long Term',
};

/**
 * Auxiliary function for fetching a Spotfiy API endpoint.
 * @param accessToken User access token.
 * @param endpoint Spotify API endpoint.
 * @param params Optional search params for the endpoint.
 * @returns Data.
 */
const fetchSpotifyEndpoint = async <T>(accessToken: string, endpoint: string, params?: URLSearchParams): Promise<T> => {
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

/**
 * Main function for fetching the top tracks of a user given a time range and a limit.
 * @param accessToken User access token.
 * @param timeRange Desired time range.
 * @param limit Desired limit.
 * @returns Array of top tracks.
 */
export const getTopTracks = async (
  accessToken: string,
  timeRange: SpotifyTopTimeRange,
  limit: number
): Promise<Track[]> => {
  const topTracksParams = new URLSearchParams();
  topTracksParams.append('time_range', timeRange);
  topTracksParams.append('limit', String(limit));

  const response = await fetchSpotifyEndpoint<{ items: Track[] }>(
    accessToken,
    SPOTIFY_TOP_TRACKS_ENDPOINT,
    topTracksParams
  );

  return response.items;
};

import type { SpotifyTopTimeRange, Track } from '../types/user-tops.types';

export const USER_TOPS_MAX_RESULTS = 12;
const SPOTIFY_TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const SPOTIFY_TOP_TRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/top/tracks';
const basic = Buffer.from(`${process.env.AUTH_SPOTIFY_CLIENT_ID!}:${process.env.AUTH_SPOTIFY_CLIENT_SECRET!}`).toString(
  'base64'
);

export const SPOTIFY_TIME_RANGES = ['short_term', 'medium_term', 'long_term'] as const;

export const SPOTIFY_TIME_RANGES_NAMES: Record<SpotifyTopTimeRange, string> = {
  short_term: 'Short Term',
  medium_term: 'Medium Term',
  long_term: 'Long Term',
};

interface GetSpotifyTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
}

/**
 * Function for gathering the users access token from the refresh token.
 * @param refreshToken User refresh token.
 * @returns Spotift token response.
 */
export const getSpotifyAccessToken = async (refreshToken: string): Promise<GetSpotifyTokenResponse> => {
  const response = await fetch(SPOTIFY_TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  });

  return response.json();
};

/**
 * Auxiliary function for fetching a Spotfiy API endpoint.
 * @param refreshToken User refresh token.
 * @param endpoint Spotify API endpoint.
 * @param params Optional search params for the endpoint.
 * @returns Data.
 */
const fetchSpotifyEndpoint = async <T>(
  refreshToken: string,
  endpoint: string,
  params?: URLSearchParams
): Promise<T> => {
  const { access_token } = await getSpotifyAccessToken(refreshToken);

  let finalUrl = endpoint;
  if (params) finalUrl = `${endpoint}?${params.toString()}`;

  const response = await fetch(finalUrl, {
    headers: {
      Authorization: `Bearer ${access_token}`,
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
 * @param refreshToken User refresh token.
 * @param timeRange Desired time range.
 * @param limit Desired limit.
 * @returns Array of top tracks.
 */
export const getTopTracks = async (
  refreshToken: string,
  timeRange: SpotifyTopTimeRange,
  limit: number
): Promise<Track[]> => {
  const topTracksParams = new URLSearchParams();
  topTracksParams.append('time_range', timeRange);
  topTracksParams.append('limit', String(limit));

  const response = await fetchSpotifyEndpoint<{ items: Track[] }>(
    refreshToken,
    SPOTIFY_TOP_TRACKS_ENDPOINT,
    topTracksParams
  );

  return response.items;
};

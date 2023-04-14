import { useSession } from 'next-auth/react';

import type { Track } from '../types/user-tops.types';

type UseUserTopsAPI = {
  getTopTracks: (timeRange: SpotifyTopTimeRange, limit: number) => Promise<Track[]>;
  getTopArtists: (timeRange: SpotifyTopTimeRange, limit: number) => Promise<string | undefined>;
};

type SpotifyTopTimeRange = 'short_term' | 'medium_term' | 'long_term';

const useUserTops = (): UseUserTopsAPI => {
  const { data } = useSession();

  const fetchSpotifyEndpoint = async <T>(endpoint: string, params?: URLSearchParams): Promise<T> => {
    const accessToken = data?.accessToken;
    if (typeof data === 'undefined' || accessToken === undefined) throw new Error('Access token is invalid!');

    let finalUrl = endpoint;
    if (params) finalUrl = `${endpoint}?${params.toString()}`;

    const response = await fetch(finalUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const parsed: Promise<T> = await response.json();
    return parsed;
  };

  const getTopTracks = async (timeRange: SpotifyTopTimeRange, limit: number) => {
    const topTracksParams = new URLSearchParams();
    topTracksParams.append('time_range', timeRange);
    topTracksParams.append('limit', String(limit));
    const response = await fetchSpotifyEndpoint<{ items: Track[] }>(
      'https://api.spotify.com/v1/me/top/tracks',
      topTracksParams
    );
    return response.items;
  };

  const getTopArtists = async (timeRange: SpotifyTopTimeRange, limit: number) => {
    const topTracksParams = new URLSearchParams();
    topTracksParams.append('time_range', timeRange);
    topTracksParams.append('limit', String(limit));
    const response = await fetchSpotifyEndpoint<string>('https://api.spotify.com/v1/me/top/artists', topTracksParams);
    return spotifyData;
  };

  return {
    getTopTracks,
    getTopArtists,
  };
};

export default useUserTops;

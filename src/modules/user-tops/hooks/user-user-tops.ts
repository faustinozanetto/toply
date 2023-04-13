import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

type UseUserTopsAPI = {
  setAccessToken: (accessToken: string) => void;
  getTopTracks: (timeRange: SpotifyTopTimeRange, limit: number) => Promise<string | undefined>;
  getTopArtists: (timeRange: SpotifyTopTimeRange, limit: number) => Promise<string | undefined>;
};

type SpotifyEndpointFetchResult<T> = {
  data?: T;
};

type SpotifyTopTimeRange = 'short_term' | 'medium_term' | 'long_term';

const useUserTops = (): UseUserTopsAPI => {
  const { data: session } = useSession();
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    if (session && session.accessToken) {
      setAccessToken(session.accessToken);
    }
  }, [session]);

  const fetchSpotifyEndpoint = async <T>(
    endpoint: string,
    params?: URLSearchParams
  ): Promise<SpotifyEndpointFetchResult<T>> => {
    if (!accessToken) throw new Error('No acceess token found!');

    let finalUrl = endpoint;
    if (params) finalUrl = `${endpoint}?${params.toString()}`;

    const response = await fetch(finalUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const { data: responseData, errors } = await response.json();

    if (errors) throw new Error(errors.message ?? 'An error ocurred!');

    return { data: responseData };
  };

  const getTopTracks = async (timeRange: SpotifyTopTimeRange, limit: number) => {
    const topTracksParams = new URLSearchParams();
    topTracksParams.append('time_range', timeRange);
    topTracksParams.append('limit', String(limit));
    const spotifyData = await fetchSpotifyEndpoint<string>('https://api.spotify.com/v1/me/top/tracks', topTracksParams);
    return spotifyData.data;
  };

  const getTopArtists = async (timeRange: SpotifyTopTimeRange, limit: number) => {
    const topTracksParams = new URLSearchParams();
    topTracksParams.append('time_range', timeRange);
    topTracksParams.append('limit', String(limit));
    const spotifyData = await fetchSpotifyEndpoint<string>(
      'https://api.spotify.com/v1/me/top/artists',
      topTracksParams
    );
    return spotifyData.data;
  };

  return {
    setAccessToken,
    getTopTracks,
    getTopArtists,
  };
};

export default useUserTops;

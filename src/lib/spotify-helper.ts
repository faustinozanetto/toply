import { SPOTIFY_API } from './constants';

/**
 *
 * @param endpoint Spotify API endpoint
 * @param accessToken The access token to use for the request
 * @returns The response from the Spotify API
 */
export const fetchSpotifyEndpoint = async (
  endpoint: string,
  accessToken: string
) => {
  const url = `${SPOTIFY_API}/${endpoint}`;
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  const response = await fetch(url, { headers })
    .then((res) => res.json())
    .catch((error) => {
      console.error(error);
      return null;
    });
  return response;
};

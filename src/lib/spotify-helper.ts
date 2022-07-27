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
): Promise<unknown> => {
  const url = `${SPOTIFY_API}/${endpoint}`;
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  return await fetch(url, { headers })
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
};

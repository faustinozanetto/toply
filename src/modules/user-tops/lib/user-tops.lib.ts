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

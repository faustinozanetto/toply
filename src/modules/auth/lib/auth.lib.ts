const SPOTIFY_REFRESH_TOKEN_URL = 'https://accounts.spotify.com/api/token';
export const {
  NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
  NEXT_PUBLIC_SPOTIFY_REDIRECT_URI,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REFRESH_TOKEN,
} = process.env;

export type SpotifyAccessTokenResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

type SpotifyTokensResponse = {
  accessToken: string;
  refreshToken: string;
};

type SpotifyUserDetailsResponse = {
  username: string;
};

export const getSpotifyAuthorizationUrl = () => {
  const scope = 'user-top-read'; // specify the desired scopes
  const state = Math.random().toString(36).substring(2, 15); // generate a random string for state parameter
  const url = `https://accounts.spotify.com/authorize?response_type=code&client_id=${NEXT_PUBLIC_SPOTIFY_CLIENT_ID}&scope=${encodeURIComponent(
    scope
  )}&redirect_uri=${encodeURIComponent(NEXT_PUBLIC_SPOTIFY_REDIRECT_URI)}&state=${state}`;
  return url;
};

export const getSpotifyTokens = async (code: string): Promise<SpotifyTokensResponse> => {
  const encodedCredentials = Buffer.from(`${NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString(
    'base64'
  );

  const requestBody = new URLSearchParams();
  requestBody.append('grant_type', 'authorization_code');
  requestBody.append('code', code);
  requestBody.append('redirect_uri', NEXT_PUBLIC_SPOTIFY_REDIRECT_URI);

  const response = await fetch(SPOTIFY_REFRESH_TOKEN_URL, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${encodedCredentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: requestBody,
  });

  if (!response.ok) {
    throw new Error('Failed to requeste refresh token');
  }

  const data = await response.json();
  const tokens: SpotifyTokensResponse = {
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
  };
  return tokens;
};

export const getSpotifyUserDetails = async (accessToken: string): Promise<SpotifyUserDetailsResponse> => {
  const response = await fetch('https://api.spotify.com/v1/me', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to request user details!');
  }

  const data = await response.json();
  const userData: SpotifyUserDetailsResponse = {
    username: data.display_name,
  };
  return userData;
};

export const SPOTIFY_CLIENT_ID: string = process.env.SPOTIFY_CLIENT_ID;
export const SPOTIFY_CLIENT_SECRET: string = process.env.SPOTIFY_CLIENT_SECRET;
export const NEXTAUTH_SECRET: string = process.env.NEXTAUTH_SECRET;
export const BASIC = Buffer.from(
  `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
).toString('base64');
export const SPOTIFY_API: string = 'https://api.spotify.com/v1';
export const SPOTIFY_USER_TOKEN: string =
  'https://accounts.spotify.com/api/token';
export const GOOGLE_CLIENT_ID: string = 'G-Z61YWCGW02';
export const GOOGLE_TAG_ID: string = 'GTM-PZ97BBV';

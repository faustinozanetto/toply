export const SPOTIFY_CLIENT_ID: string = process.env.SPOTIFY_CLIENT_ID;
export const SPOTIFY_CLIENT_SECRET: string = process.env.SPOTIFY_CLIENT_SECRET;
export const NEXTAUTH_SECRET: string = process.env.NEXTAUTH_SECRET;
export const BASIC = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');
export const SPOTIFY_API: string = 'https://api.spotify.com/v1';
export const SPOTIFY_USER_TOKEN: string = 'https://accounts.spotify.com/api/token';
export const GOOGLE_CLIENT_ID: string = 'G-Z61YWCGW02';
export const GOOGLE_TAG_ID: string = 'GTM-PZ97BBV';
export const BACKGROUNDS: string[] = [
  'linear-gradient(to right, rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8))',
  'linear-gradient(to right, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234))',
  'linear-gradient(to right, rgb(249, 168, 212), rgb(216, 180, 254), rgb(129, 140, 248))',
  'linear-gradient(to right, rgb(199, 210, 254), rgb(254, 202, 202), rgb(254, 249, 195))',
  'linear-gradient(to right, rgb(254, 249, 195), rgb(253, 224, 71), rgb(234, 179, 8))',
  'linear-gradient(to right, rgb(254, 240, 138), rgb(187, 247, 208), rgb(34, 197, 94))',
  'linear-gradient(to right, rgb(254, 202, 202), rgb(252, 165, 165), rgb(254, 240, 138))',
  'linear-gradient(to right, rgb(187, 247, 208), rgb(134, 239, 172), rgb(59, 130, 246))',
  'linear-gradient(to right, rgb(134, 239, 172), rgb(253, 224, 71), rgb(249, 168, 212))',
  'linear-gradient(to right, rgb(165, 180, 252), rgb(192, 132, 252))',
  'linear-gradient(to right, rgb(248, 113, 113), rgb(209, 213, 219), rgb(59, 130, 246))',
  'linear-gradient(to right, rgb(134, 239, 172), rgb(192, 132, 252))',
  'linear-gradient(to right, rgb(15, 23, 42), rgb(88, 28, 135), rgb(15, 23, 42))',
  'linear-gradient(rgb(56, 189, 248), rgb(186, 230, 253))',
  'linear-gradient(to right, rgb(153, 246, 228), rgb(217, 249, 157))',
  'linear-gradient(to right, rgb(165, 243, 252), rgb(34, 211, 238))',
  'linear-gradient(to right, rgb(196, 181, 253), rgb(167, 139, 250))',
  'linear-gradient(to right, rgb(192, 38, 211), rgb(219, 39, 119))',
  'linear-gradient(to right, rgb(16, 185, 129), rgb(101, 163, 13))',
];

const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');

/**
 * @type {import('next').NextConfig}
 */
module.exports = (phase) => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environment variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  // when `next build` or `npm run build` is used
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';

  const isStaging = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1';

  const env = {
    SPOTIFY_CLIENT_ID: (() => {
      if (isDev || isProd || isStaging) return '2a3ee0ecc27f482d987d315f66e89c24';
      return 'SPOTIFY_CLIENT_ID:not (isDev,isProd && !isStaging,isProd && isStaging)';
    })(),
    SPOTIFY_REDIRECT_URI: (() => {
      if (isDev) return 'http://localhost:3000/api/auth/callback';
      if (isProd) return 'http://toply.vercel.app/api/auth/callback';
      if (isStaging) return 'http://localhost:3000/api/auth/callback';
      return 'SPOTIFY_REDIRECT_URI:not (isDev,isProd && !isStaging,isProd && isStaging)';
    })(),
    GOOGLE_CLIENT_ID: (() => {
      if (isDev || isProd || isStaging) return 'G-Z61YWCGW02';
      return 'GOOGLE_CLIENT_ID:not (isDev,isProd && !isStaging,isProd && isStaging)';
    })(),
  };

  return {
    images: {
      domains: ['i.scdn.co'],
    },
    env,
    reactStrictMode: true,
  };
};

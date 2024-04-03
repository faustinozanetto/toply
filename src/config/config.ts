import { __URL__ } from '@modules/common/lib/common.constants';

import type { SiteConfig } from './types/config.types';

export const siteConfig: SiteConfig = {
  name: 'Toply',
  description: 'Toply is web app for generating a cool showcase of your top songs and artists from Spotify.',
  url: __URL__,
  keywords: ['toply', 'spotify', 'top artists', 'top tracks', 'music'],
};

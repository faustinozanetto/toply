import UserTops from '@modules/user-tops/components/user-tops';
import { siteConfig } from 'config/config';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Home',
  openGraph: {
    images: [
      {
        url: `${siteConfig.url}/images/stickervise-banner.png`,
        width: 2500,
        height: 800,
      },
    ],
  },
  twitter: {
    images: [
      {
        url: `${siteConfig.url}/images/stickervise-banner.png`,
        width: 2500,
        height: 800,
      },
    ],
  },
};

export default async function Home() {
  return <UserTops />;
}

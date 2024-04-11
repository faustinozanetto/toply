import { ACCESS_TOKEN_COOKIE, getSpotifyUserDetails } from '@modules/auth/lib/auth-options';
import UserTops from '@modules/user-tops/components/user-tops';
import { siteConfig } from 'config/config';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
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
  const cookiesStore = cookies();
  const accessToken = cookiesStore.get(ACCESS_TOKEN_COOKIE);
  if (!accessToken) return redirect('/sign-in');

  const userDetails = await getSpotifyUserDetails(accessToken.value);

  return <UserTops userDetails={userDetails} />;
}

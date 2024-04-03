import type { TopTracksGetResponse } from '@modules/api/types/api.types';
import { __URL__ } from '@modules/common/lib/common.constants';
import UserTops from '@modules/user-tops/components/user-tops';
import { siteConfig } from 'config/config';
import type { Metadata } from 'next';
import { headers } from 'next/headers';
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

const fetchTopTracks = async (): Promise<TopTracksGetResponse> => {
  const url = new URL('/api/top-tracks', __URL__);
  const response = await fetch(url, { method: 'GET', headers: headers() });
  if (!response.ok) {
    const errorResponse = await response.json();
    let errorMessage = 'Failed to get top tracks!';
    if (errorResponse.error && errorResponse.error.message) {
      errorMessage = errorResponse.error.message;
    }
    throw new Error(errorMessage);
  }

  return response.json();
};

export default async function Home() {
  try {
    const result = await fetchTopTracks();
    if (!result.data) {
      return redirect('/sign-in');
    }

    const { data } = result;

    return <UserTops topTracks={data.topTracks} username={data.username} />;
  } catch (err) {
    return redirect('/sign-in');
  }
}

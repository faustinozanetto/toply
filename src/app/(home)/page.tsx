import type { TopTracksGetResponse } from '@modules/api/types/api.types';
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
  try {
    const url = new URL('/api/top-tracks', siteConfig.url);
    const response = await fetch(url, { method: 'GET', headers: headers() });

    if (!response.ok) {
      const errorResponse = await response.json();
      let errorMessage = 'Failed to get top tracks!';
      if (errorResponse.error && errorResponse.error.message) {
        errorMessage = errorResponse.error.message;
      }
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    throw new Error('Failed to calculate top tracks');
  }
};

export default async function Home() {
  try {
    const result = await fetchTopTracks();
    const { data } = result;

    console.log({ data });

    if (!data) {
      return redirect('/sign-in');
    }

    return <UserTops topTracks={data.topTracks} username={data.username} />;
  } catch (error) {
    console.log({ error });

    return redirect('/sign-in');
  }
}

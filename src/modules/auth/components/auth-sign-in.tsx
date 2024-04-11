'use client';

import { Button } from '@modules/ui/components/button/button';
import { SpotifyIcon } from '@modules/ui/components/icons/spotify-icon';
import { useToast } from '@modules/ui/components/toasts/context/toast-context';
import { useRouter } from 'next/navigation';
import React from 'react';

import { getSpotifyAuthorizationUrl } from '../lib/auth-options';

const AuthSignIn: React.FC = () => {
  const router = useRouter();
  const { toast } = useToast();

  const handleAuthSignIn = async () => {
    try {
      const { url, verifier } = await getSpotifyAuthorizationUrl();

      const respone = await fetch('/api/auth/set-verifier', {
        method: 'POST',
        body: JSON.stringify({
          code: verifier,
        }),
      });
      const data = await respone.json();
      if (data.success) router.push(url);
    } catch (error) {
      toast({ variant: 'error', content: 'Failed to sign in with Spotify!' });
    }
  };

  return (
    <div className="rounded border p-4 shadow md:p-6">
      <div className="flex flex-col items-center">
        <h1 className="mb-2.5 text-center text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
          Sign In Now
        </h1>
        <p className="mb-4 max-w-md text-center text-muted-foreground">
          Discover your musical journey with a personalized touch! Sign in now to uncover a captivating visualization of
          your most cherished tracks on Spotify, completely free of charge.
        </p>
        <Button aria-label="Sign In With Spotify" className="w-full" onClick={handleAuthSignIn}>
          <SpotifyIcon className="mr-2" />
          Sign In With Spotify
        </Button>
      </div>
    </div>
  );
};

export default AuthSignIn;

import { getSpotifyAuthorizationUrl } from '@modules/auth/lib/auth.lib';
import { Button } from '@modules/ui/components/button/button';
import { useToast } from '@modules/ui/components/toasts/context/toast-context';
import { useRouter } from 'next/router';
import React from 'react';

const AuthSignIn: React.FC = () => {
  const router = useRouter();
  const { toast } = useToast();
  const startSignInFlow = async () => {
    try {
      const { url, verifier } = await getSpotifyAuthorizationUrl();
      const body = new URLSearchParams();
      body.append('code', verifier);
      const respone = await fetch('/api/auth/set-verifier', {
        method: 'POST',
        body,
      });
      const data = await respone.json();
      if (data.success) router.push(url);
    } catch (err) {
      toast({ variant: 'error', content: 'An error ocurred while signin in!' });
    }
  };

  return (
    <div className="space-y-4">
      {/* Heading */}
      <div className="flex flex-col items-center rounded-lg bg-neutral-100 p-4 shadow-xl">
        <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">Sign In</h2>
      </div>
      {/* Options */}
      <div className="flex flex-col items-center rounded-lg bg-neutral-100 p-4 shadow-xl">
        <p className="mb-4 text-neutral-900 md:text-lg">
          Sign in to Toply to generate a cool showcase of your top songs and artists from Spotify.
        </p>
        <Button colorScheme="secondary" className="w-full" onClick={startSignInFlow}>
          Sign In Now
        </Button>
        <p className="mt-2 text-sm text-neutral-600 md:text-base">
          You will be redirected to Spotify to sign in using your account.
        </p>
      </div>
    </div>
  );
};

export default AuthSignIn;

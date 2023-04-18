import { useAuthContext } from '@modules/auth/context/auth-context';
import { AuthActionType } from '@modules/auth/context/reducer/types';
import { getSpotifyAuthorizationUrl } from '@modules/auth/lib/auth.lib';
import { Button } from '@modules/ui/components/button/button';
import { useToast } from '@modules/ui/components/toasts/context/toast-context';
import { useRouter } from 'next/router';
import React from 'react';

const AuthSignIn: React.FC = () => {
  const router = useRouter();
  const { toast } = useToast();
  const { dispatch } = useAuthContext();

  const handleLogin = async () => {
    try {
      const { url, verifier } = await getSpotifyAuthorizationUrl();
      dispatch({ type: AuthActionType.SET_CODE_VERIFIER, payload: { codeVerifier: verifier } });
      router.push(url);
    } catch (err) {
      toast({ variant: 'error', content: 'An error ocurred while signin in!' });
    }
  };

  return (
    <div className="space-y-4">
      {/* Heading */}
      <div className="flex flex-col items-center rounded-lg bg-neutral-100 p-4 shadow-xl">
        <h2 className="text-3xl font-bold text-neutral-900">Sign In</h2>
      </div>
      {/* Options */}
      <div className="flex flex-col items-center rounded-lg bg-neutral-100 p-4 shadow-xl">
        <p className="mb-4 text-lg text-neutral-900">
          Sign in to Toply to generate a cool showcase of your top songs and artists from Spotify.
        </p>

        <Button size="lg" colorScheme="secondary" className="w-full" onClick={handleLogin}>
          Sign In Now
        </Button>

        <p className="mt-2 text-sm text-neutral-600">
          You will be redirected to Spotify to sign in using your account.
        </p>
      </div>
    </div>
  );
};

export default AuthSignIn;

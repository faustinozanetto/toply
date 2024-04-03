'use client';

import { Button } from '@modules/ui/components/button/button';
import { SpotifyIcon } from '@modules/ui/components/icons/spotify-icon';
import type { BuiltInProviderType } from 'next-auth/providers/index';
import { signIn } from 'next-auth/react';
import React from 'react';

import type { AuthSignInOption } from '../types/auth.types';

export const AUTH_SIGN_IN_OPTIONS: AuthSignInOption[] = [
  {
    provider: 'spotify',
    label: 'Spotify',
    icon: <SpotifyIcon className="mr-2" />,
  },
];

const AuthSignIn: React.FC = () => {
  const handleAuthSignIn = async (provider: BuiltInProviderType): Promise<void> => {
    try {
      await signIn(provider, { redirect: false, callbackUrl: '/' });
    } catch (error) {
      // toast.error('An error occurred while signing in!');
    }
  };

  return (
    <div className="rounded border p-4 shadow md:p-6">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-center text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">Sign In Now</h1>
        <p className="max-w-md text-center text-muted-foreground">
          Join us now to access a range of powerful features. Create and manage stickers effortlessly. Sign In today and
          unleash the full potential of our platform for your online success.
        </p>
        <div className="flex w-full flex-col gap-2">
          {AUTH_SIGN_IN_OPTIONS.map((option) => {
            return (
              <Button
                aria-label={`Sign In With ${option.label}`}
                key={option.provider}
                onClick={async () => {
                  await handleAuthSignIn(option.provider);
                }}
              >
                {option.icon}
                Sign In With {option.label}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AuthSignIn;

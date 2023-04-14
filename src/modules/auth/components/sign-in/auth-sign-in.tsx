import { Button } from '@modules/ui/components/button/button';
import { useToast } from '@modules/ui/components/toasts/context/toast-context';
import { signIn } from 'next-auth/react';
import React from 'react';

const AuthSignIn: React.FC = () => {
  const { toast } = useToast();

  const handleSignIn = async () => {
    try {
      await signIn('spotify', { callbackUrl: '/' });
    } catch (error) {
      toast({ variant: 'error', content: 'An error ocurred while signin in!' });
    }
  };

  return (
    <div className="space-y-4">
      {/* Heading */}
      <div className="flex flex-col items-center rounded-lg bg-neutral-50 p-4 shadow-xl">
        <h2 className="text-3xl font-bold text-neutral-900">Sign In Now</h2>
      </div>
      {/* Options */}
      <div className="flex flex-col items-center rounded-lg bg-neutral-50 p-4 shadow-xl">
        <p className="mb-4 text-lg text-neutral-900">
          Sign in to Toply to generate a cool showcase of your top songs and artists from Spotify.
        </p>
        <Button size="lg" colorScheme="secondary" className="w-full" onClick={handleSignIn}>
          Sign In Now
        </Button>
      </div>
    </div>
  );
};

export default AuthSignIn;

import SpotifyLogo from '@modules/branding/components/spotify-logo';
import { signIn } from 'next-auth/react';
import React from 'react';

type ISignInButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const SignInButton: React.FC<ISignInButtonProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <button
      className="mt-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-[#1ed760] p-1.5 text-base font-semibold text-[#191414] hover:bg-[#1db954]"
      onClick={async () => {
        await signIn('spotify', {
          redirect: true,
          callbackUrl: '/',
        });
      }}
      {...rest}
    >
      <SpotifyLogo color="black" />
      <span className="relative p-2.5">{children}</span>
    </button>
  );
};

export default SignInButton;

import SignInButton from '@modules/auth/sign-in/components/sign-in-button';
import React from 'react';

interface ISignInViewProps {}

const SignInView: React.FC<ISignInViewProps> = (props) => {
  const {} = props;

  return (
    <div className="flex w-full flex-col rounded-lg bg-white p-4 drop-shadow-2xl">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center pb-4 text-center">
        <h1 className="text-3xl font-semibold text-black">Sign In Now</h1>
      </div>
      {/* Options */}
      <div className="flex flex-col items-center justify-center pb-4 text-center">
        <p className="text-lg font-normal text-black">
          Sign in to Toply to generate a cool showcase of your top songs and artists from Spotify.
        </p>
      </div>
      {/* Sign in */}
      <SignInButton>Sign In with Spotify</SignInButton>
    </div>
  );
};

export default SignInView;

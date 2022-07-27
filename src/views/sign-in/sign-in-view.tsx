import SignInButton from '@modules/auth/sign-in/components/sign-in-button';
import React from 'react';

interface ISignInViewProps {}

const SignInView: React.FC<ISignInViewProps> = (props) => {
  const {} = props;

  return (
    <div className='flex flex-col w-full p-4 rounded-lg drop-shadow-2xl bg-white'>
      {/* Heading */}
      <div className='flex flex-col items-center justify-center text-center pb-4'>
        <h1 className='text-3xl font-semibold text-black'>Sign In Now</h1>
      </div>
      {/* Options */}
      <div className='flex flex-col items-center justify-center text-center pb-4'>
        <p className='text-lg text-black font-normal'>
          Sign in to Toply to generate a cool showcase of your top songs and
          artists from Spotify.
        </p>
      </div>
      {/* Sign in */}
      <SignInButton>Sign In with Spotify</SignInButton>
    </div>
  );
};

export default SignInView;

import Layout from '@modules/layout/components/layout';
import React from 'react';
import { signIn } from 'next-auth/react';

interface ISignInPageProps {}

const SignInPage: React.FC<ISignInPageProps> = (props) => {
  const {} = props;

  return (
    <Layout
      headProps={{
        title: 'Sign In | Toply',
        description:
          'Sign in to Toply to generate a cool showcase of your top songs and artists from Spotify.',
      }}
    >
      <div className='flex flex-col flex-1 p-4 sm:px-6 md:px-8'>
        <main className='max-w-3xl mx-auto'>
          <div className='flex flex-col items-center justify-center text-center text-gray-500'>
            <h1 className='text-3xl font-semibold'>Sign In</h1>
            <p className='text-lg text-black font-semibold'>
              Sign in to Toply to generate a cool showcase of your top songs and
              artists from Spotify.
            </p>
          </div>
          <div className='flex flex-col items-center justify-center text-center text-gray-500'>
            <button
              onClick={async () =>
                await signIn('spotify', {
                  redirect: true,
                  callbackUrl: '/',
                })
              }
            >
              Sign In with Spotify
            </button>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default SignInPage;

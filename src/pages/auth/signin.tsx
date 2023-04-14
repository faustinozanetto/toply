import Layout from '@modules/layout/components/layout';
import { Button } from '@modules/ui/components/button/button';
import { signIn } from 'next-auth/react';
import React from 'react';

const SignInPage: React.FC = () => {
  return (
    <Layout
      headProps={{
        title: 'Sign In | Toply',
        description: 'Toply is web app for generating a cool showcase of your top songs and artists from Spotify.',
      }}
    >
      <Button aria-label="Sign In" size="xl" onClick={() => signIn()}>
        Sign In
      </Button>
    </Layout>
  );
};

export default SignInPage;

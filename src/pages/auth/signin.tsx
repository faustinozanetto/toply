import AuthSignIn from '@modules/auth/components/auth-sign-in';
import Layout from '@modules/layout/components/layout';
import React from 'react';

const SignInPage: React.FC = () => {
  return (
    <Layout
      headProps={{
        title: 'Sign In | Toply',
        description: 'Toply is web app for generating a cool showcase of your top songs and artists from Spotify.',
      }}
    >
      <AuthSignIn />
    </Layout>
  );
};

export default SignInPage;

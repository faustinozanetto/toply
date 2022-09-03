import Layout from '@modules/layout/components/layout';
import SignInView from '@views/sign-in/sign-in-view';
import React from 'react';

interface ISignInPageProps {}

const SignInPage: React.FC<ISignInPageProps> = (props) => {
  const {} = props;

  return (
    <Layout
      headProps={{
        title: 'Sign In | Toply',
        description: 'Sign in to Toply to generate a cool showcase of your top songs and artists from Spotify.',
      }}
    >
      <SignInView />
    </Layout>
  );
};

export default SignInPage;

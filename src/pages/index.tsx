import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

const HomePage: React.FC = (props) => {
  const {} = props;
  const { data: session } = useSession();

  return (
    <div>
      <h1 className='font-bold text-3xl'>Signed In As {session?.user?.name}</h1>
      {session?.user?.image && (
        <img src={session?.user?.image} alt='avatar' width={500} />
      )}
      <button onClick={() => signIn()}>Sign in</button>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export default HomePage;

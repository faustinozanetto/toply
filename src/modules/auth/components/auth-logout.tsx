import { IconButton } from '@modules/ui/components/icon-button/icon-button';
import { useRouter } from 'next/router';
import React from 'react';

import { useAuthContext } from '../context/auth-context';
import { AuthActionType } from '../context/reducer/types';

const AuthLogout: React.FC = () => {
  const router = useRouter();
  const { state, dispatch } = useAuthContext();

  const handleSignOut = async () => {
    dispatch({ type: AuthActionType.LOGOUT, payload: {} });
    const respone = await fetch('/api/auth/logout', { method: 'POST' });
    const data = await respone.json();
    if (data.success) {
      router.push('/auth/signin');
    }
  };

  return (
    <>
      {state.isLoggedIn ? (
        <IconButton
          aria-label="Logout"
          colorScheme="danger"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 stroke-black dark:stroke-white"
              viewBox="0 0 24 24"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
              <path d="M7 12h14l-3 -3m0 6l3 -3" />
            </svg>
          }
          onClick={handleSignOut}
        />
      ) : null}
    </>
  );
};

export default AuthLogout;

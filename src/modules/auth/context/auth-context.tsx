import React, { createContext, useContext, useReducer } from 'react';

import { reducer } from './reducer';
import type { AuthContextState } from './reducer/types';

const initialState: AuthContextState = {
  state: { isLoggedIn: false, username: null },
  dispatch: () => {},
};

const AuthContext = createContext<AuthContextState>(initialState);

/**
 * Hook that returns the toast context.
 * @returns The context if valid.
 */
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('Tried to use AuthContext with no context avaiable!');
  return context;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, {
    ...initialState.state,
  });

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};

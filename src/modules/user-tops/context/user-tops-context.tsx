import React, { createContext, useContext, useReducer } from 'react';

import { reducer } from './reducer';
import type { UserTopsContextState } from './reducer/types';

const initialState: UserTopsContextState = {
  state: { topTracks: [], topArtists: [], contentLoading: true },
  dispatch: () => {},
};

const UserTopsContext = createContext<UserTopsContextState>(initialState);

/**
 * Hook that returns the toast context.
 * @returns The context if valid.
 */
export const useUserTopsContext = () => {
  const context = useContext(UserTopsContext);
  if (!context) throw new Error('Tried to use UserTopsContext with no context avaiable!');
  return context;
};

type UserTopsProviderProps = {
  children: React.ReactNode;
};

export const UserTopsProvider: React.FC<UserTopsProviderProps> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, {
    ...initialState.state,
  });

  return <UserTopsContext.Provider value={{ state, dispatch }}>{children}</UserTopsContext.Provider>;
};

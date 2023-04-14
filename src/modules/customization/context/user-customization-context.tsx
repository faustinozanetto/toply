import React, { createContext, useContext, useReducer } from 'react';

import { CUSTOMIZATION_BACKGROUNDS } from '../lib/customization.lib';
import { reducer } from './reducer';
import type { UserCustomizationContextState } from './reducer/types';

const initialState: UserCustomizationContextState = {
  state: { background: CUSTOMIZATION_BACKGROUNDS[0] },
  dispatch: () => {},
};

const UserCustomizationContext = createContext<UserCustomizationContextState>(initialState);

/**
 * Hook that returns the toast context.
 * @returns The context if valid.
 */
export const useUserCustomizationContext = () => {
  const context = useContext(UserCustomizationContext);
  if (!context) throw new Error('Tried to use UserCustomizationContext with no context avaiable!');
  return context;
};

type UserCustomizationProviderProps = {
  children: React.ReactNode;
};

export const UserCustomizationProvider: React.FC<UserCustomizationProviderProps> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, {
    ...initialState.state,
  });

  return <UserCustomizationContext.Provider value={{ state, dispatch }}>{children}</UserCustomizationContext.Provider>;
};

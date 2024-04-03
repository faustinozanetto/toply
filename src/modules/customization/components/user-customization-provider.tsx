import React, { useReducer } from 'react';

import { customizationReducer } from '../context/reducer';
import { customizationInitialState, UserCustomizationContext } from '../context/user-customization-context';

type UserCustomizationProviderProps = {
  children: React.ReactNode;
};

export const UserCustomizationProvider: React.FC<UserCustomizationProviderProps> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(customizationReducer, {
    ...customizationInitialState.state,
  });

  return <UserCustomizationContext.Provider value={{ state, dispatch }}>{children}</UserCustomizationContext.Provider>;
};

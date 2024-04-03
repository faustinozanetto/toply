import { useContext } from 'react';

import { UserCustomizationContext } from '../context/user-customization-context';

export const useCustomization = () => {
  const context = useContext(UserCustomizationContext);
  if (!context) throw new Error('Tried to use UserCustomizationContext with no context avaiable!');
  return context;
};

import { createContext } from 'react';

import { CUSTOMIZATION_BACKGROUNDS } from '../lib/customization.lib';
import type { UserCustomizationContextState } from './reducer/types';

export const customizationInitialState: UserCustomizationContextState = {
  state: { background: CUSTOMIZATION_BACKGROUNDS[0] },
  dispatch: () => {},
};

export const UserCustomizationContext = createContext<UserCustomizationContextState>(customizationInitialState);

import { ToplyDataTimeSpanEnum, ToplyTopItemsEnum } from '@typedefs/toply.typesdefs';
import { createContext, useContext, useReducer } from 'react';

import reducer from './reducer/reducer';
import type { CustomizationActions, CustomizationState } from './types';

interface ICustomizationContextProps {
  state: CustomizationState;
  dispatch: React.Dispatch<CustomizationActions>;
}

const CustomizationContext = createContext<ICustomizationContextProps>({} as ICustomizationContextProps);

interface ICustomizationProviderProps {
  children: React.ReactNode;
}

const CustomizationProvider: React.FC<ICustomizationProviderProps> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, {
    backgroundColor: 'linear-gradient(to right, rgb(251, 113, 133), rgb(217, 70, 239), rgb(99, 102, 241))',
    topType: ToplyTopItemsEnum.SONGS,
    topTimeSpan: ToplyDataTimeSpanEnum.MONTH,
  });

  return <CustomizationContext.Provider value={{ state, dispatch }}>{children}</CustomizationContext.Provider>;
};

export const useCustomizationContext = () => {
  return useContext<ICustomizationContextProps>(CustomizationContext);
};

export default CustomizationProvider;

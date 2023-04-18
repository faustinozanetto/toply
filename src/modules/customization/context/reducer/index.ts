import type { UserCustomizationActions, UserCustomizationState } from './types';
import { UserCustomizationActionType } from './types';

export const reducer = (state: UserCustomizationState, action: UserCustomizationActions): UserCustomizationState => {
  switch (action.type) {
    case UserCustomizationActionType.SET_BACKGROUND: {
      return {
        ...state,
        background: action.payload.background,
      };
    }
    default:
      throw new Error('The action you requested does not exists!');
  }
};

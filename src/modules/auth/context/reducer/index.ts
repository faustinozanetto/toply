import type { AuthActions, AuthState } from './types';
import { AuthActionType } from './types';

export const reducer = (state: AuthState, action: AuthActions): AuthState => {
  switch (action.type) {
    case AuthActionType.SIGNIN: {
      return {
        ...state,
        username: action.payload.username,
        isLoggedIn: true,
      };
    }

    case AuthActionType.LOGOUT: {
      return {
        ...state,
        username: null,
        isLoggedIn: false,
      };
    }
    default:
      throw new Error('The action you requested does not exists!');
  }
};

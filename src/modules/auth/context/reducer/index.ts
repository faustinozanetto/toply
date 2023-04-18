import { ACCESS_TOKEN_COOKIE, CODE_VERIFIER_COOKIE } from '@modules/auth/lib/auth.lib';
import { destroyCookie, setCookie } from 'nookies';

import type { AuthActions, AuthState } from './types';
import { AuthActionType } from './types';

export const reducer = (state: AuthState, action: AuthActions): AuthState => {
  switch (action.type) {
    case AuthActionType.SET_USERNAME: {
      return {
        ...state,
        username: action.payload.username,
      };
    }
    case AuthActionType.SET_CODE_VERIFIER: {
      setCookie(null, CODE_VERIFIER_COOKIE, action.payload.codeVerifier, { path: '/', secure: true, maxAge: 3600 });

      return {
        ...state,
      };
    }
    case AuthActionType.LOGOUT: {
      destroyCookie(null, ACCESS_TOKEN_COOKIE);
      destroyCookie(null, CODE_VERIFIER_COOKIE);

      return {
        ...state,
        username: null,
      };
    }
    default:
      throw new Error('The action you requested does not exists!');
  }
};

export type ActionMap<M extends { [index: string]: unknown }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type AuthState = {
  username: string | null;
};

export type AuthContextState = {
  state: AuthState;
  dispatch: React.Dispatch<AuthActions>;
};

export enum AuthActionType {
  SET_USERNAME,
  SET_CODE_VERIFIER,
  LOGOUT,
}

type AuthPayload = {
  [AuthActionType.SET_USERNAME]: {
    username: string;
  };
  [AuthActionType.SET_CODE_VERIFIER]: {
    codeVerifier: string;
  };
  [AuthActionType.LOGOUT]: {};
};

export type AuthActions = ActionMap<AuthPayload>[keyof ActionMap<AuthPayload>];

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
  isLoggedIn: boolean;
  username: string | null;
};

export type AuthContextState = {
  state: AuthState;
  dispatch: React.Dispatch<AuthActions>;
};

export enum AuthActionType {
  SIGNIN,
  LOGOUT,
}

type AuthPayload = {
  [AuthActionType.SIGNIN]: {
    username: string;
  };
  [AuthActionType.LOGOUT]: {};
};

export type AuthActions = ActionMap<AuthPayload>[keyof ActionMap<AuthPayload>];

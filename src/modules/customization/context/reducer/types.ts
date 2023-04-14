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

export type UserCustomizationState = {
  background: string;
};

export type UserCustomizationContextState = {
  state: UserCustomizationState;
  dispatch: React.Dispatch<UserCustomizationActions>;
};

export enum UserCustomizationActionType {
  SET_BACKGROUND,
}

type UserCustomizationPayload = {
  [UserCustomizationActionType.SET_BACKGROUND]: {
    background: string;
  };
};

export type UserCustomizationActions = ActionMap<UserCustomizationPayload>[keyof ActionMap<UserCustomizationPayload>];

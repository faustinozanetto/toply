import type { ActionMap } from '@modules/common/types/common.types';

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

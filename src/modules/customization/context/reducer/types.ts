import type { ActionMap } from '@modules/common/types/common.types';
import type { SpotifyTopTimeRange } from '@modules/user-tops/types/user-tops.types';

export type UserCustomizationState = {
  background: string;
  timeRange: SpotifyTopTimeRange;
};

export type UserCustomizationContextState = {
  state: UserCustomizationState;
  dispatch: React.Dispatch<UserCustomizationActions>;
};

export enum UserCustomizationActionType {
  SET_BACKGROUND,
  SET_TIME_RANGE,
}

type UserCustomizationPayload = {
  [UserCustomizationActionType.SET_BACKGROUND]: {
    background: string;
  };
  [UserCustomizationActionType.SET_TIME_RANGE]: {
    timeRange: SpotifyTopTimeRange;
  };
};

export type UserCustomizationActions = ActionMap<UserCustomizationPayload>[keyof ActionMap<UserCustomizationPayload>];

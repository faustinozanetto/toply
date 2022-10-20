import type { ActionMap, ToplyDataTimeSpanEnum, ToplyTopItemsEnum } from '@typedefs/toply.typesdefs';

export type CustomizationState = {
  backgroundColor: string;
  topType: ToplyTopItemsEnum;
  topTimeSpan: ToplyDataTimeSpanEnum;
};

export enum CustomizationActionType {
  SET_BACKGROUND_COLOR,
  SET_TOP_TYPE,
  SET_TIME_SPAN,
}

type CustomizationPayload = {
  [CustomizationActionType.SET_BACKGROUND_COLOR]: {
    backgroundColor: string;
  };
  [CustomizationActionType.SET_TOP_TYPE]: {
    topType: ToplyTopItemsEnum;
  };
  [CustomizationActionType.SET_TIME_SPAN]: {
    topTimeSpan: ToplyDataTimeSpanEnum;
  };
};

export type CustomizationActions = ActionMap<CustomizationPayload>[keyof ActionMap<CustomizationPayload>];

import type { CustomizationActions, CustomizationState } from '../types';
import { CustomizationActionType } from '../types';

const reducer = (state: CustomizationState, action: CustomizationActions): CustomizationState => {
  switch (action.type) {
    case CustomizationActionType.SET_BACKGROUND_COLOR: {
      return {
        ...state,
        backgroundColor: action.payload.backgroundColor,
      };
    }
    case CustomizationActionType.SET_TIME_SPAN: {
      return {
        ...state,
        topTimeSpan: action.payload.topTimeSpan,
      };
    }
    case CustomizationActionType.SET_TOP_TYPE: {
      return {
        ...state,
        topType: action.payload.topType,
      };
    }
    default:
      throw new Error('Unknown action type');
  }
};

export default reducer;

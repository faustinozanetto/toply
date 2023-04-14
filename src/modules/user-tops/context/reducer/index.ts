import type { UserTopsActions, UserTopsState } from './types';
import { UserTopsActionType } from './types';

export const reducer = (state: UserTopsState, action: UserTopsActions): UserTopsState => {
  switch (action.type) {
    case UserTopsActionType.SET_TOP_TRACKS: {
      return {
        ...state,
        topTracks: action.payload.topTracks,
      };
    }
    case UserTopsActionType.SET_TOP_ARTISTS: {
      return {
        ...state,
        topArtists: action.payload.topArtists,
      };
    }
    case UserTopsActionType.SET_CONTENT_LOADING: {
      return {
        ...state,
        contentLoading: action.payload.contentLoading,
      };
    }
    default:
      throw new Error('The action you requested does not exists!');
  }
};

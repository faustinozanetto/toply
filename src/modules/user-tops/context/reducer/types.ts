import type { Artist, Track } from '@modules/user-tops/types/user-tops.types';

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

export type UserTopsState = {
  topTracks: Track[];
  topArtists: Artist[];
  contentLoading: boolean;
};

export type UserTopsContextState = {
  state: UserTopsState;
  dispatch: React.Dispatch<UserTopsActions>;
};

export enum UserTopsActionType {
  SET_TOP_TRACKS,
  SET_TOP_ARTISTS,
  SET_CONTENT_LOADING,
}

type UserTopsPayload = {
  [UserTopsActionType.SET_TOP_TRACKS]: {
    topTracks: Track[];
  };
  [UserTopsActionType.SET_TOP_ARTISTS]: {
    topArtists: Artist[];
  };
  [UserTopsActionType.SET_CONTENT_LOADING]: {
    contentLoading: boolean;
  };
};

export type UserTopsActions = ActionMap<UserTopsPayload>[keyof ActionMap<UserTopsPayload>];

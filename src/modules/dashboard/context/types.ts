import type { ActionMap, SpotifyArtistType, SpotifyTrackType, ToplyDataTimeSpanEnum } from '@typedefs/toply.typesdefs';

export type DashboardState = {
  contentLoading: boolean;
  artists: Map<ToplyDataTimeSpanEnum, SpotifyArtistType[]>;
  songs: Map<ToplyDataTimeSpanEnum, SpotifyTrackType[]>;
  selectedSong: SpotifyTrackType | null;
  selectedArtist: SpotifyArtistType | null;
};

export enum DashboardActionType {
  SET_CONTENT_LOADING,
  SET_ARTISTS,
  SET_SONGS,
  SET_SELECTED_SONG,
  SET_SELECTED_ARTIST,
}

type DashboardPayload = {
  [DashboardActionType.SET_CONTENT_LOADING]: {
    loading: boolean;
  };
  [DashboardActionType.SET_ARTISTS]: {
    artists: {
      timeSpan: ToplyDataTimeSpanEnum;
      data: SpotifyArtistType[];
    };
  };
  [DashboardActionType.SET_SONGS]: {
    songs: {
      timeSpan: ToplyDataTimeSpanEnum;
      data: SpotifyTrackType[];
    };
  };
  [DashboardActionType.SET_SELECTED_ARTIST]: {
    artist: SpotifyArtistType;
  };
  [DashboardActionType.SET_SELECTED_SONG]: {
    song: SpotifyTrackType;
  };
};

export type DashboardActions = ActionMap<DashboardPayload>[keyof ActionMap<DashboardPayload>];

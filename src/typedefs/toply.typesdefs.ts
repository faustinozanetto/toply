/*= ================= Reducers ================== */
export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum SpotifyAlbumCategoryEnum {
  SINGLE = 'single',
  ALBUM = 'album',
}

export type SpotifyImageType = {
  /**
   * The image height in pixels. If unknown: `null` or not returned.
   */
  height?: number | undefined;
  /**
   * The source URL of the image.
   */
  url: string;
  /**
   * The image width in pixels. If unknown: null or not returned.
   */
  width?: number | undefined;
};

export type SpotifyAlbumType = {
  id: string;
  href: string;
  name: string;
  uri: string;
  images: SpotifyImageType[];
  type: SpotifyAlbumCategoryEnum;
  artists: SpotifyArtistType[];
  external_urls: {
    spotify: string;
  };
};

export type SpotifyArtistType = {
  id: string;
  href: string;
  name: string;
  type: string;
  uri: string;
  genres: string[];
  images: SpotifyImageType[];
  externalUrls: {
    spotify: string;
  };
};

export type SpotifyTrackType = {
  id: string;
  name: string;
  href: string;
  thumbnail: string;
  uri: string;
  popularity: number;
  album: SpotifyAlbumType;
  artists: SpotifyArtistType[];
};

export enum ToplyDataTimeSpanEnum {
  MONTH = 'Month',
  SEMESTER = 'Semester',
  ALLTIME = 'All Time',
}

export enum ToplyTopItemsEnum {
  SONGS = 'Songs',
  ARTISTS = 'Artists',
}

export type AppStateType = {
  backgroundColor: string;
  topType: ToplyTopItemsEnum;
  topTimeSpan: ToplyDataTimeSpanEnum;
};

export type TopSongsStateType = {
  songs: Map<ToplyDataTimeSpanEnum, SpotifyTrackType[]>;
  songsLoading: boolean;
  selectedSong: SpotifyTrackType | null;
};

export type TopArtistsStateType = {
  artists: Map<ToplyDataTimeSpanEnum, SpotifyArtistType[]>;
  artistsLoading: boolean;
  selectedArtist: SpotifyArtistType | null;
};

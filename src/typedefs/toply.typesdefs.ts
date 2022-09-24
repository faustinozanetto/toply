export enum SpotifyAlbumCategoryEnum {
  SINGLE = 'single',
  ALBUM = 'album',
}

export type SpotifyImageType = {
  url: string;
  width: number;
  height: number;
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

export enum ToplyDataTimeStapEnum {
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
};

export type TopSongsStateType = {
  songs: Map<ToplyDataTimeStapEnum, SpotifyTrackType[]>;
  songsLoading: boolean;
  selectedSong: SpotifyTrackType | null;
  timeSpan: ToplyDataTimeStapEnum;
};

export type TopArtistsStateType = {
  artists: Map<ToplyDataTimeStapEnum, SpotifyArtistType[]>;
  artistsLoading: boolean;
  selectedArtist: SpotifyArtistType | null;
  timeSpan: ToplyDataTimeStapEnum;
};

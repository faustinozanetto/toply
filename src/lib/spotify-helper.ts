import {
  SpotifyAlbumCategoryEnum,
  SpotifyAlbumType,
  SpotifyArtistType,
  SpotifyTrackType,
  ToplyDataTimeStapEnum,
} from '@typedefs/toply.typesdefs';

export const parseTopSongs = (data: SpotifyApi.UsersTopTracksResponse): SpotifyTrackType[] => {
  let tracks: SpotifyTrackType[] = [];
  data.items.map((track) => {
    const trackArtists: SpotifyArtistType[] = [];
    // Populate track artists.
    track.artists.map((artist) => {
      const foundArtist: SpotifyArtistType = {
        id: artist.id,
        name: artist.name,
        href: artist.href,
        type: artist.type,
        uri: artist.uri,
        externalUrls: {
          spotify: artist.external_urls.spotify,
        },
      };
      trackArtists.push(foundArtist);
    });
    // Populate track album.
    const trackAlbum: SpotifyAlbumType = {
      id: track.album.id,
      name: track.album.name,
      uri: track.album.uri,
      href: track.album.href,
      // @ts-ignore
      images: track.album.images,
      type: track.album.type === 'album' ? SpotifyAlbumCategoryEnum.ALBUM : SpotifyAlbumCategoryEnum.SINGLE,
    };
    // Populate basic track data.
    const foundTrack: SpotifyTrackType = {
      id: track.id,
      name: track.name,
      href: track.href,
      thumbnail: track.href,
      uri: track.uri,
      popularity: track.popularity,
      album: trackAlbum,
      artists: trackArtists,
    };
    // Populate track
    tracks.push(foundTrack);
  });
  return tracks;
};

export const parseTimeSpan = (timeSpan: ToplyDataTimeStapEnum): 'short_term' | 'medium_term' | 'long_term' => {
  switch (timeSpan) {
    case ToplyDataTimeStapEnum.MONTH:
      return 'short_term';
    case ToplyDataTimeStapEnum.SEMESTER:
      return 'medium_term';
    case ToplyDataTimeStapEnum.ALLTIME:
      return 'long_term';
    default:
      return 'short_term';
  }
};

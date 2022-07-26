import type { SpotifyAlbumType, SpotifyArtistType, SpotifyTrackType } from '@typedefs/toply.typesdefs';
import { SpotifyAlbumCategoryEnum, ToplyDataTimeSpanEnum } from '@typedefs/toply.typesdefs';

/**
 *
 * @param data Spotify api data.
 * @returns the parsed songs into the typed ones.
 */
export const parseTopSongs = (data: SpotifyApi.UsersTopTracksResponse): SpotifyTrackType[] => {
  const tracks: SpotifyTrackType[] = data.items.map((track) => {
    const trackArtists: SpotifyArtistType[] = track.artists.map((artist) => {
      const foundArtist: SpotifyArtistType = {
        id: artist.id,
        name: artist.name,
        href: artist.href,
        type: artist.type,
        uri: artist.uri,
        genres: [],
        images: [],
        externalUrls: {
          spotify: artist.external_urls.spotify,
        },
      };
      return foundArtist;
    });
    // Populate track album.
    const trackAlbum: SpotifyAlbumType = {
      id: track.album.id,
      name: track.album.name,
      uri: track.album.uri,
      href: track.album.href,
      images: track.album.images,
      artists: [],
      external_urls: track.external_urls,
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

    return foundTrack;
  });
  return tracks;
};

/**
 *
 * @param data Spotify api data.
 * @returns the parsed artists into the typed ones.
 */
export const parseTopArtists = (data: SpotifyApi.UsersTopArtistsResponse): SpotifyArtistType[] => {
  const artists: SpotifyArtistType[] = data.items.map((artist) => {
    const foundArtist: SpotifyArtistType = {
      id: artist.id,
      name: artist.name,
      href: artist.href,
      type: artist.type,
      uri: artist.uri,
      images: artist.images,
      genres: artist.genres,
      externalUrls: {
        spotify: artist.external_urls.spotify,
      },
    };
    return foundArtist;
  });
  return artists;
};

/**
 *
 * @param timeSpan Timespan as enum type.
 * @returns the parsed string type used in the api call.
 */
export const parseTimeSpan = (timeSpan: ToplyDataTimeSpanEnum): 'short_term' | 'medium_term' | 'long_term' => {
  switch (timeSpan) {
    case ToplyDataTimeSpanEnum.MONTH:
      return 'short_term';
    case ToplyDataTimeSpanEnum.SEMESTER:
      return 'medium_term';
    case ToplyDataTimeSpanEnum.ALLTIME:
      return 'long_term';
    default:
      return 'short_term';
  }
};

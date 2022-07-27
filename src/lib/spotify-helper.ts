import {
  SpotifyAlbumType,
  SpotifyArtistType,
  SpotifyTrackType,
  ToplyDataTimeStapEnum,
} from '@typedefs/toply.typesdefs';
import { SPOTIFY_API } from './constants';

/**
 *
 * @param endpoint Spotify API endpoint
 * @param accessToken The access token to use for the request
 * @returns The response from the Spotify API
 */
export const fetchSpotifyEndpoint = async (
  endpoint: string,
  accessToken: string
): Promise<unknown> => {
  const url = `${SPOTIFY_API}/${endpoint}`;
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  return await fetch(url, { headers })
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
};

export const fetchTopSongs = async (
  accessToken: string,
  timeSpan: ToplyDataTimeStapEnum
): Promise<SpotifyTrackType[]> => {
  const fetchURL = `me/top/tracks?limit=10&time_range=${parseTimeSpan(
    timeSpan
  )}`;
  const data = await fetchSpotifyEndpoint(fetchURL, accessToken).then(
    (data) => {
      // @ts-ignore
      if (data && data.items) {
        let tracks: SpotifyTrackType[] = [];
        // @ts-ignore
        data.items.map((track: any) => {
          // Populate basic track data.
          const foundTrack: SpotifyTrackType = {
            id: track.id,
            name: track.name,
            href: track.href,
            thumbnail: track.preview_url,
            uri: track.uri,
            popularity: track.popularity,
          };
          const trackArtists: SpotifyArtistType[] = [];
          // Populate track artists.
          track.artists.map((artist: any) => {
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
          const foundAlbum: SpotifyAlbumType = {
            id: track.album.id,
            name: track.album.name,
            uri: track.album.uri,
            href: track.album.href,
            type: track.album.type,
          };
          foundTrack.artists = trackArtists;
          foundTrack.album = foundAlbum;
          // Populate track
          tracks.push(foundTrack);
        });
        return tracks;
      }
    }
  );
  return data ?? [];
};

export const parseTimeSpan = (timeSpan: ToplyDataTimeStapEnum): string => {
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

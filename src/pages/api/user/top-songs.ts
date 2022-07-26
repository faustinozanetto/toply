import { fetchSpotifyEndpoint } from '@lib/spotify-helper';
import {
  SpotifyAlbumType,
  SpotifyArtistType,
  SpotifyTrackType,
} from '@types/toply.typesdefs';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async (
  req: NextApiRequest,
  res: NextApiResponse<SpotifyTrackType[]>
) => {
  const apiURL = `me/top/tracks?limit=10&time_range=short_term`;
  const session = await getSession({ req });
  // @ts-ignore
  const data = await fetchSpotifyEndpoint(apiURL, session?.user?.accessToken);
  let tracks: SpotifyTrackType[] = [];
  if (data.items.length) {
    data.items.map((track: any, index) => {
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
  }
  res.status(200).json(tracks);
};

import { MAX_TRACKS } from '@lib/constants';
import { parseTimeSpan, parseTopArtists, parseTopSongs } from '@lib/spotify-helper';
import { useCustomizationContext } from '@modules/customization/context/customization-context';
import { useDashboardContext } from '@modules/dashboard/context/dashboard-context';
import { DashboardActionType } from '@modules/dashboard/context/types';
import type { SpotifyArtistType, SpotifyTrackType } from '@typedefs/toply.typesdefs';
import { ToplyTopItemsEnum } from '@typedefs/toply.typesdefs';
import { useEffect } from 'react';

import useSpotify from './use-spotify';

interface IResultType {
  id: string;
  name: string;
  image: string;
  blurImage: string;
}

const useUserTops = () => {
  const { state: customizationState } = useCustomizationContext();
  const { state, dispatch } = useDashboardContext();
  const spotifyAPI = useSpotify();

  const fetchTopSongs = async () => {
    if (spotifyAPI.getAccessToken()) {
      const timeRange = parseTimeSpan(customizationState.topTimeSpan);
      // If we already have fetched the songs before we do nothing, otherwise we fetch.
      if (!state.songs.has(customizationState.topTimeSpan)) {
        dispatch({
          type: DashboardActionType.SET_CONTENT_LOADING,
          payload: {
            loading: true,
          },
        });
        await spotifyAPI
          .getMyTopTracks({ limit: MAX_TRACKS, time_range: timeRange })
          .then((data) => {
            dispatch({
              type: DashboardActionType.SET_SONGS,
              payload: {
                songs: {
                  timeSpan: customizationState.topTimeSpan,
                  data: parseTopSongs(data.body),
                },
              },
            });
          })
          .finally(() => {
            dispatch({
              type: DashboardActionType.SET_CONTENT_LOADING,
              payload: {
                loading: false,
              },
            });
          });
      }
    }
  };

  const fetchTopArtists = async () => {
    if (spotifyAPI.getAccessToken()) {
      const timeRange = parseTimeSpan(customizationState.topTimeSpan);
      // If we already have fetched the songs before we do nothing, otherwise we fetch.
      if (!state.artists.has(customizationState.topTimeSpan)) {
        dispatch({
          type: DashboardActionType.SET_CONTENT_LOADING,
          payload: {
            loading: true,
          },
        });
        await spotifyAPI
          .getMyTopArtists({ limit: MAX_TRACKS, time_range: timeRange })
          .then((data) => {
            dispatch({
              type: DashboardActionType.SET_ARTISTS,
              payload: {
                artists: {
                  timeSpan: customizationState.topTimeSpan,
                  data: parseTopArtists(data.body),
                },
              },
            });
          })
          .finally(() => {
            dispatch({
              type: DashboardActionType.SET_CONTENT_LOADING,
              payload: {
                loading: false,
              },
            });
          });
      }
    }
  };

  // Fetch snogs or artists.
  const fetchTops = () => {
    if (customizationState.topType === ToplyTopItemsEnum.SONGS) {
      return fetchTopSongs();
    }
    return fetchTopArtists();
  };

  const updateSelectedSong = (song: SpotifyTrackType): void => {
    dispatch({
      type: DashboardActionType.SET_SELECTED_SONG,
      payload: {
        song,
      },
    });
  };

  const updateSelectedArtist = (artist: SpotifyArtistType): void => {
    dispatch({
      type: DashboardActionType.SET_SELECTED_ARTIST,
      payload: {
        artist,
      },
    });
  };

  const songs = () => {
    return state.songs.get(customizationState.topTimeSpan) ?? [];
  };

  const artists = () => {
    return state.artists.get(customizationState.topTimeSpan) ?? [];
  };

  const results = () => {
    let res: IResultType[] = [];
    if (customizationState.topType === ToplyTopItemsEnum.SONGS) {
      const songsToMap: SpotifyTrackType[] = state.songs.get(customizationState.topTimeSpan) || [];
      res = songsToMap.map((song) => {
        return {
          id: song.id,
          name: song.name,
          image: song.album?.images[0]?.url || '',
          blurImage: song.album?.images[2]?.url || '',
        };
      });
    } else {
      const artistsToMap: SpotifyArtistType[] = state.artists.get(customizationState.topTimeSpan) || [];
      res = artistsToMap.map((artist) => {
        return {
          id: artist.id,
          name: artist.name,
          image: artist?.images[0]?.url || '',
          blurImage: artist?.images[2]?.url || '',
        };
      });
    }
    return res;
  };

  // Refetch tops when type or time span changes.
  useEffect(() => {
    fetchTops();
  }, [customizationState.topType, customizationState.topTimeSpan]);

  return {
    songs,
    artists,
    results,
    selectedSong: state.selectedSong,
    selectedArtist: state.selectedArtist,
    fetchTopSongs,
    fetchTopArtists,
    fetchTops,
    updateSelectedSong,
    updateSelectedArtist,
  };
};

export default useUserTops;

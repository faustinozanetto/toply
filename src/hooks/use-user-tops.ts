import { MAX_TRACKS } from '@lib/constants';
import { parseTimeSpan, parseTopArtists, parseTopSongs } from '@lib/spotify-helper';
import {
  selectTopTimeSpan,
  selectTopType,
  setTopTimeSpan,
  setTopType as setTopTypeRedux,
} from '@state/slices/app.slice';
import {
  selectArtists,
  selectSelectedArtist,
  setArtists,
  setArtistsLoading,
  setSelectedArtist,
} from '@state/slices/top-artists.slice';
import {
  selectSelectedSong,
  selectSongs,
  setSelectedSong,
  setSongs,
  setSongsLoading,
} from '@state/slices/top-songs.slice';
import type { SpotifyArtistType, SpotifyTrackType, ToplyDataTimeStapEnum } from '@typedefs/toply.typesdefs';
import { ToplyTopItemsEnum } from '@typedefs/toply.typesdefs';
import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useSpotify from './use-spotify';

const useUserTops = () => {
  const dispatch = useDispatch();
  const stateSongs = useSelector(selectSongs);
  const stateArtists = useSelector(selectArtists);
  const topType = useSelector(selectTopType);
  const selectedSong = useSelector(selectSelectedSong);
  const selectedArtist = useSelector(selectSelectedArtist);
  const topTimeSpan = useSelector(selectTopTimeSpan);
  const spotifyAPI = useSpotify();

  const setTopType = useCallback((type: ToplyTopItemsEnum) => {
    dispatch(setTopTypeRedux(type));
  }, []);

  const setTimeSpan = useCallback((span: ToplyDataTimeStapEnum) => {
    dispatch(setTopTimeSpan(span));
  }, []);

  const fetchTopSongs = async () => {
    if (spotifyAPI.getAccessToken()) {
      // Update timespan to redux state.
      dispatch(setSongsLoading(true));
      const timeRange = parseTimeSpan(topTimeSpan);
      // If we already have fetched the songs before we do nothing, otherwise we fetch.
      if (!stateSongs.has(topTimeSpan)) {
        await spotifyAPI
          .getMyTopTracks({ limit: MAX_TRACKS, time_range: timeRange })
          .then((data) => {
            dispatch(setSongs({ timeSpan: topTimeSpan, songs: parseTopSongs(data.body) }));
          })
          .finally(() => {
            dispatch(setSongsLoading(false));
          });
      } else {
        dispatch(setSongsLoading(false));
      }
    }
  };

  const fetchTopArtists = async () => {
    if (spotifyAPI.getAccessToken()) {
      // Update timespan to redux state.
      dispatch(setArtistsLoading(true));
      const timeRange = parseTimeSpan(topTimeSpan);
      // If we already have fetched the songs before we do nothing, otherwise we fetch.
      if (!stateArtists.has(topTimeSpan)) {
        await spotifyAPI
          .getMyTopArtists({ limit: MAX_TRACKS, time_range: timeRange })
          .then((data) => {
            dispatch(setArtists({ timeSpan: topTimeSpan, artists: parseTopArtists(data.body) }));
          })
          .finally(() => {
            dispatch(setArtistsLoading(false));
          });
      } else {
        dispatch(setArtistsLoading(false));
      }
    }
  };

  // Fetch snogs or artists.
  const fetchTops = () => {
    if (topType === ToplyTopItemsEnum.SONGS) {
      return fetchTopSongs();
    }
    return fetchTopArtists();
  };

  const updateSelectedSong = (song: SpotifyTrackType): void => {
    dispatch(setSelectedSong(song));
  };

  const updateSelectedArtist = (artist: SpotifyArtistType): void => {
    dispatch(setSelectedArtist(artist));
  };

  // Refetch tops when type or time span changes.
  useEffect(() => {
    fetchTops();
  }, [topType, topTimeSpan]);

  const songs = useMemo(() => {
    return stateSongs.get(topTimeSpan) ?? [];
  }, [stateSongs, topTimeSpan]);

  const artists = useMemo(() => {
    return stateArtists.get(topTimeSpan) ?? [];
  }, [stateArtists, topTimeSpan]);

  return {
    songs,
    artists,
    topType,
    topTimeSpan,
    selectedSong,
    selectedArtist,
    setTopType,
    setTimeSpan,
    fetchTopSongs,
    fetchTopArtists,
    fetchTops,
    updateSelectedSong,
    updateSelectedArtist,
  };
};

export default useUserTops;

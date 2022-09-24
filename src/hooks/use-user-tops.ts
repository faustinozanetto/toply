import { MAX_TRACKS } from '@lib/constants';
import { parseTimeSpan, parseTopArtists, parseTopSongs } from '@lib/spotify-helper';
import { selectTopType, setTopType as setTopTypeRedux } from '@state/slices/app.slice';
import {
  selectArtists,
  selectArtistsTimeSpan,
  setArtists,
  setArtistsLoading,
  setArtistsTimeSpan,
} from '@state/slices/top-artists.slice';
import {
  selectSongs,
  selectSongsTimeSpan,
  setSongs,
  setSongsLoading,
  setSongsTimeSpan,
} from '@state/slices/top-songs.slice';
import type { ToplyDataTimeStapEnum } from '@typedefs/toply.typesdefs';
import { ToplyTopItemsEnum } from '@typedefs/toply.typesdefs';
import { useDispatch, useSelector } from 'react-redux';

import useSpotify from './use-spotify';

const useUserTops = () => {
  const dispatch = useDispatch();
  const songs = useSelector(selectSongs);
  const artists = useSelector(selectArtists);
  const topType = useSelector(selectTopType);
  const songsTimeSpan = useSelector(selectSongsTimeSpan);
  const artistsTimeSpan = useSelector(selectArtistsTimeSpan);
  const spotifyAPI = useSpotify();

  const setTopType = (type: ToplyTopItemsEnum): void => {
    dispatch(setTopTypeRedux(type));
  };

  const setTopTimeSpan = (type: ToplyTopItemsEnum, timeSpan: ToplyDataTimeStapEnum): void => {
    if (type === ToplyTopItemsEnum.SONGS) {
      dispatch(setSongsTimeSpan(timeSpan));
    } else {
      dispatch(setArtistsTimeSpan(timeSpan));
    }
  };

  const fetchTopSongs = async () => {
    if (spotifyAPI.getAccessToken()) {
      // Update timespan to redux state.
      dispatch(setSongsLoading(true));
      const timeRange = parseTimeSpan(songsTimeSpan);
      // If we already have fetched the songs before we do nothing, otherwise we fetch.
      if (!songs.get(songsTimeSpan)?.length) {
        await spotifyAPI
          .getMyTopTracks({ limit: MAX_TRACKS, time_range: timeRange })
          .then((data) => {
            dispatch(setSongs({ timeSpan: songsTimeSpan, songs: parseTopSongs(data.body) }));
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
      const timeRange = parseTimeSpan(artistsTimeSpan);
      // If we already have fetched the songs before we do nothing, otherwise we fetch.
      if (!artists.get(artistsTimeSpan)?.length) {
        await spotifyAPI
          .getMyTopArtists({ limit: MAX_TRACKS, time_range: timeRange })
          .then((data) => {
            dispatch(setArtists({ timeSpan: artistsTimeSpan, artists: parseTopArtists(data.body) }));
          })
          .finally(() => {
            dispatch(setArtistsLoading(false));
          });
      } else {
        dispatch(setArtistsLoading(false));
      }
    }
  };

  const fetchTops = async () => {
    if (topType === ToplyTopItemsEnum.SONGS) {
      fetchTopSongs();
    } else {
      fetchTopArtists();
    }
  };

  return { songs, artists, topType, setTopType, setTopTimeSpan, fetchTopSongs, fetchTopArtists, fetchTops };
};

export default useUserTops;

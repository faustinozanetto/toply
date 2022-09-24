import useSpotify from '@hooks/use-spotify';
import { MAX_TRACKS } from '@lib/constants';
import { parseTimeSpan, parseTopSongs } from '@lib/spotify-helper';
import Button from '@modules/ui/components/button/button';
import { selectSongs, setSongs, setSongsLoading, setSongsTimeSpan } from '@state/slices/top-songs.slice';
import type { ToplyDataTimeStapEnum } from '@typedefs/toply.typesdefs';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface ICustomizationTimespanButtonProps {
  /* Timespan to pass to the button */
  timeSpan: ToplyDataTimeStapEnum;
}

const CustomizationTimespanButton: React.FC<ICustomizationTimespanButtonProps> = (props) => {
  const { timeSpan } = props;
  const dispatch = useDispatch();
  const songs = useSelector(selectSongs);
  const spotifyAPI = useSpotify();

  const handleTimeSpanSelect = async () => {
    if (spotifyAPI.getAccessToken()) {
      // Update timespan to redux state.
      dispatch(setSongsTimeSpan(timeSpan));
      dispatch(setSongsLoading(true));
      const timeRange = parseTimeSpan(timeSpan);
      // If we already have fetched the songs before we do nothing, otherwise we fetch.
      if (!songs.get(timeSpan)?.length) {
        await spotifyAPI
          .getMyTopTracks({ limit: MAX_TRACKS, time_range: timeRange })
          .then((data) => {
            dispatch(setSongs({ timeSpan, songs: parseTopSongs(data.body) }));
          })
          .finally(() => {
            dispatch(setSongsLoading(false));
          });
      } else {
        dispatch(setSongsLoading(false));
      }
    }
  };

  return (
    <Button size="sm" aria-label={`${timeSpan} Time Span`} onClick={handleTimeSpanSelect}>
      {timeSpan}
    </Button>
  );
};

export default CustomizationTimespanButton;

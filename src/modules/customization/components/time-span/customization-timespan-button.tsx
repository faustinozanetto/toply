import React, { useCallback } from 'react';
import {
  selectTimeSpan,
  setTimeSpan,
  setTopSongs,
} from '@state/slices/toply.slice';
import { ToplyDataTimeStapEnum } from '@typedefs/toply.typesdefs';
import { useDispatch, useSelector } from 'react-redux';
import { parseTimeSpan, parseTopSongs } from '@lib/spotify-helper';
import { useSession } from 'next-auth/react';
import useSpotify from 'src/hooks/use-spotify';

interface ICustomizationTimespanButtonProps {
  timeSpan: ToplyDataTimeStapEnum;
}

const CustomizationTimespanButton: React.FC<
  ICustomizationTimespanButtonProps
> = (props) => {
  const { timeSpan } = props;
  const { data: session } = useSession();
  const selectedTimeSpan = useSelector(selectTimeSpan);
  const dispatch = useDispatch();
  const spotifyAPI = useSpotify();

  const fetchSongs = useCallback(() => {
    if (spotifyAPI.getAccessToken()) {
      const timeRange = parseTimeSpan(timeSpan);
      spotifyAPI
        .getMyTopTracks({ limit: 12, time_range: timeRange })
        .then((data) => {
          const songs = data.body;
          dispatch(setTopSongs(parseTopSongs(songs)));
        });
    }
  }, [selectedTimeSpan]);

  return (
    <button
      className='transition-colors inline-flex items-center justify-center p-1 overflow-hidden text-md font-semibold text-white rounded-lg bg-rose-700 hover:bg-pink-600 '
      aria-label={`${timeSpan} Time Span`}
      onClick={async () => {
        dispatch(setTimeSpan(timeSpan));
        fetchSongs();
      }}
    >
      <span className='relative py-2 px-3'>{timeSpan}</span>
    </button>
  );
};

export default CustomizationTimespanButton;

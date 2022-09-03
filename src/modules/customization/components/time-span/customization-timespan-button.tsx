import useSpotify from '@hooks/use-spotify';
import { parseTimeSpan, parseTopSongs } from '@lib/spotify-helper';
import { setTimeSpan, setTopSongs } from '@state/slices/toply.slice';
import type { ToplyDataTimeStapEnum } from '@typedefs/toply.typesdefs';
import React from 'react';
import { useDispatch } from 'react-redux';

interface ICustomizationTimespanButtonProps {
  timeSpan: ToplyDataTimeStapEnum;
}

const CustomizationTimespanButton: React.FC<ICustomizationTimespanButtonProps> = (props) => {
  const { timeSpan } = props;
  const dispatch = useDispatch();
  const spotifyAPI = useSpotify();

  const fetchSongs = async () => {
    if (spotifyAPI.getAccessToken()) {
      const timeRange = parseTimeSpan(timeSpan);
      await spotifyAPI.getMyTopTracks({ limit: 12, time_range: timeRange }).then((data) => {
        const songs = data.body;
        dispatch(setTopSongs(parseTopSongs(songs)));
      });
    }
  };

  return (
    <button
      className="inline-flex items-center justify-center overflow-hidden rounded-lg bg-rose-700 p-1 text-sm font-semibold text-white transition-colors hover:bg-pink-600 sm:text-base"
      aria-label={`${timeSpan} Time Span`}
      onClick={async () => {
        dispatch(setTimeSpan(timeSpan));
        await fetchSongs();
      }}
    >
      <span className="relative py-1.5 sm:py-2">{timeSpan}</span>
    </button>
  );
};

export default CustomizationTimespanButton;

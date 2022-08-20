import React from 'react';
import { setTimeSpan, setTopSongs } from '@state/slices/toply.slice';
import { ToplyDataTimeStapEnum } from '@typedefs/toply.typesdefs';
import { useDispatch } from 'react-redux';
import { parseTimeSpan, parseTopSongs } from '@lib/spotify-helper';
import useSpotify from 'src/hooks/use-spotify';

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
      className="transition-colors inline-flex items-center justify-center p-1 overflow-hidden text-sm font-semibold text-white rounded-lg bg-rose-700 hover:bg-pink-600 sm:text-md"
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

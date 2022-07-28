import { parseTopSongs } from '@lib/spotify-helper';
import ResultCopy from '@modules/image/components/result-copy';
import ResultExport from '@modules/image/components/result-export';
import Results from '@modules/image/components/results';
import {
  selectTopSongs,
  setTopSongs,
  setTopSongsLoading,
} from '@state/slices/toply.slice';
import { useSession } from 'next-auth/react';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSpotify from 'src/hooks/use-spotify';
import Customization from '../../customization/components/customization';

interface IDashboardProps {}

const Dashboard: React.FC<IDashboardProps> = (props) => {
  const {} = props;
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const spotifyAPI = useSpotify();
  const topSongs = useSelector(selectTopSongs);
  const containerRef = useRef<HTMLDivElement>(null);

  /*
   * Fetchs the top songs from Spotify and sets them in the store
   */
  useEffect(() => {
    if (topSongs.length === 0 && session?.user?.name) {
      dispatch(setTopSongsLoading(true));
      if (spotifyAPI.getAccessToken()) {
        spotifyAPI
          .getMyTopTracks({ limit: 12, time_range: 'short_term' })
          .then((data) => {
            const songs = data.body;
            dispatch(setTopSongs(parseTopSongs(songs)));
            dispatch(setTopSongsLoading(false));
          });
      }
    }
  }, [session?.user?.name]);

  return (
    <div className='flex flex-col w-full'>
      {/* Customization */}
      <Customization />
      {/* Loading and results */}
      <div className='flex items-center justify-center' ref={containerRef}>
        <Results />
      </div>

      {/* Export button */}
      <div className='grid grid-cols-2 gap-2 fixed right-0 bottom-5 p-2'>
        <ResultExport resultRef={containerRef} />
        <ResultCopy resultRef={containerRef} />
      </div>
    </div>
  );
};

export default Dashboard;

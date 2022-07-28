import { trackEvent } from '@lib/google';
import { handleImageGeneration, saveImageToFile } from '@lib/image-generation';
import { parseTopSongs } from '@lib/spotify-helper';
import Results from '@modules/image/components/results';
import Loading from '@modules/loading/components/loading';
import { selectTopSongs, setTopSongs } from '@state/slices/toply.slice';
import { useSession } from 'next-auth/react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSpotify from 'src/hooks/use-spotify';
import Customization from '../../customization/components/customization';

interface IDashboardProps {}

const Dashboard: React.FC<IDashboardProps> = (props) => {
  const {} = props;
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const spotifyAPI = useSpotify();
  const [fetchingSongs, setFetchingSongs] = useState(false);
  const topSongs = useSelector(selectTopSongs);
  const frameRef = useRef<HTMLDivElement>(null);

  /*
   * Fetchs the top songs from Spotify and sets them in the store
   */
  useEffect(() => {
    if (topSongs.length === 0 && session?.user?.name) {
      setFetchingSongs(true);
      if (spotifyAPI.getAccessToken()) {
        spotifyAPI
          .getMyTopTracks({ limit: 12, time_range: 'short_term' })
          .then((data) => {
            const songs = data.body;
            dispatch(setTopSongs(parseTopSongs(songs)));
          });
      }
    }
    setFetchingSongs(false);
  }, [session]);

  const handleExport = useCallback(() => {
    if (frameRef && frameRef.current) {
      return handleImageGeneration(frameRef.current).then(async (dataUrl) => {
        try {
          if (dataUrl) {
            saveImageToFile(dataUrl);
            trackEvent('Home', 'Save Photo');
          }
        } catch (error) {
          console.error(error);
        }
      });
    }
  }, [frameRef]);

  return (
    <div className='flex flex-col w-full'>
      {/* Customization */}
      <Customization />
      {/* Loading and results */}
      <div className='flex items-center justify-center' ref={frameRef}>
        {fetchingSongs && !topSongs?.length ? <Loading /> : <Results />}
      </div>

      {/* Save button */}
      <div className='fixed right-0 bottom-5 p-2'>
        <button
          className='transition-colors inline-flex items-center justify-center p-2 overflow-hidden text-lg font-semibold text-white rounded-lg bg-pink-700 hover:bg-pink-600 '
          aria-label='Load Data'
          onClick={handleExport}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

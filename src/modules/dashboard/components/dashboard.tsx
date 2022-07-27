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
            saveImageToFile(dataUrl).then(() => {
              console.log('Image copied');
            });
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
      <div className='grid items-center justify-center' ref={frameRef}>
        {fetchingSongs && !topSongs?.length ? <Loading /> : <Results />}
      </div>

      {/* Save button */}
      <div className='fixed right-0 bottom-5 p-2'>
        <button
          className='transition-colors inline-flex items-center justify-center p-2 overflow-hidden text-lg font-semibold text-white rounded-lg bg-rose-700 hover:bg-pink-600 '
          aria-label='Load Data'
          onClick={handleExport}
        >
          Save Image
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

import {
  copyImageToClipboard,
  handleImageGeneration,
  saveImageToFile,
} from '@lib/image-generation';
import { fetchTopSongs } from '@lib/spotify-helper';
import Results from '@modules/image/components/results';
import Loading from '@modules/loading/components/loading';
import { selectTopSongs, setTopSongs } from '@state/slices/toply.slice';
import {
  SpotifyTrackType,
  ToplyDataTimeStapEnum,
} from '@typedefs/toply.typesdefs';
import { useSession } from 'next-auth/react';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Customization from '../../customization/components/customization';

interface IDashboardProps {}

const Dashboard: React.FC<IDashboardProps> = (props) => {
  const {} = props;
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const [fetchingSongs, setFetchingSongs] = useState(false);
  const topSongs = useSelector(selectTopSongs);
  const frameRef = useRef<HTMLDivElement>(null);

  /*
   * Fetchs the top songs from Spotify and sets them in the store
   */
  useEffect(() => {
    if (topSongs.length === 0 && session?.user?.name) {
      const fetchData = async () => {
        setFetchingSongs(true);
        await fetchTopSongs(
          // @ts-ignore
          session?.user.accessToken,
          ToplyDataTimeStapEnum.MONTH
        ).then((data) => {
          dispatch(setTopSongs(data as SpotifyTrackType[]));
        });
      };

      fetchData().then(() => setFetchingSongs(false));
    } else {
      setFetchingSongs(false);
    }
  }, [session?.user?.name]);

  const handleExport = async (): Promise<void> => {
    if (frameRef && frameRef.current) {
      return handleImageGeneration(frameRef.current).then(async (dataUrl) => {
        try {
          if (dataUrl) {
            copyImageToClipboard(dataUrl).then(() => {
              console.log('Image copied');
            });
          }
        } catch (error) {
          console.error(error);
        }
      });
    }
  };

  return (
    <div className='flex flex-col w-full'>
      {/* Header */}
      {/* <DashboardHeader /> */}
      {/* Customization */}
      <Customization />
      <div
        className='grid grid-rows-2 items-center justify-center mt-10'
        ref={frameRef}
      >
        {fetchingSongs && !topSongs?.length ? <Loading /> : <Results />}
      </div>

      {/* Make a button float on the bottom right */}
      <div className='fixed right-0 bottom-5 p-2'>
        <button
          className='transition-colors inline-flex items-center justify-center p-2 overflow-hidden text-lg font-semibold text-white rounded-lg bg-rose-700 hover:bg-pink-600 '
          aria-label='Load Data'
          onClick={async () => {
            await handleExport();
          }}
        >
          Save Image
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

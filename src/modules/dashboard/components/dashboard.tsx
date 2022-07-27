import { handleImageGeneration, saveImageToFile } from '@lib/image-generation';
import ResultImage from '@modules/image/components/result-image';
import { selectTopSongs } from '@state/slices/toply.slice';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import Customization from '../../customization/components/customization';

interface IDashboardProps {}

const Dashboard: React.FC<IDashboardProps> = (props) => {
  const {} = props;
  const frameRef = useRef<HTMLDivElement>(null);
  const topSongs = useSelector(selectTopSongs);

  const handleExport = async (): Promise<void> => {
    if (frameRef && frameRef.current) {
      return handleImageGeneration(frameRef.current).then(async (dataUrl) => {
        try {
          if (dataUrl) {
            saveImageToFile(dataUrl).then(() => {
              console.log('Image saved');
            });
          }
        } catch (error) {
          console.error(error);
        }
      });
    }
  };

  return (
    <div className='flex flex-col w-full '>
      {/* Header */}
      {/* <DashboardHeader /> */}
      {/* Customization */}
      <Customization />

      {/*  {topSongs?.length &&
        topSongs.map((song) => {
          return (
            <div
              className='flex flex-col bg-white p-3 mb-1 rounded-lg drop-shadow-2xl justify-center '
              key={song.id}
            >
              <span className='text-lg font-semibold text-black'>
                {song.name}
              </span>
            </div>
          );
        })} */}
      <div
        className='grid grid-rows-2 items-center justify-center mt-10'
        ref={frameRef}
      >
        <ResultImage rotation='10deg' />
        <ResultImage rotation='-10deg' />
      </div>

      {/* Make a button float on the bottom right */}
      <div className='fixed right-0 bottom-0 p-2'>
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

import React from 'react';
import ResultTrack from './result-track';
import { selectTopSongs } from '@state/slices/toply.slice';
import { useSelector } from 'react-redux';

interface IResultPhotoProps {}

const ResultPhoto: React.FC<IResultPhotoProps> = (props) => {
  const {} = props;
  const topSongs = useSelector(selectTopSongs);

  return (
    <div className='w-full p-4 shadow-2xl bg-gradient-to-r from-gray-100 to-gray-300 rounded-lg'>
      <div className='grid grid-cols-3 gap-2'>
        {topSongs?.map((song, index) => {
          return <ResultTrack key={song.id} track={song} index={index} />;
        })}
      </div>
      <div className='mt-2 opacity-30 font-bold'>https://toply.vercel.app/</div>
    </div>
  );
};

export default ResultPhoto;

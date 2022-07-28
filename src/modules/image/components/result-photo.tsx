import React from 'react';
import ResultTrack from './result-track';
import { selectTopSongs } from '@state/slices/toply.slice';
import { useSelector } from 'react-redux';

interface IResultPhotoProps {}

const ResultPhoto: React.FC<IResultPhotoProps> = (props) => {
  const {} = props;
  const topSongs = useSelector(selectTopSongs);

  return (
    <div
      className='w-full p-4 rounded-lg'
      style={{
        filter: 'sepia(0.35)',
        backgroundImage: `url(/assets/images/rough-paper.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
      }}
    >
      <div className='grid grid-cols-3 gap-2'>
        {topSongs &&
          topSongs.map((song, index) => (
            <ResultTrack key={song.id} track={song} index={index} />
          ))}
      </div>
      <div className='mt-2 opacity-60 text-black font-bold'>
        https://toply.vercel.app/
      </div>
    </div>
  );
};

export default ResultPhoto;

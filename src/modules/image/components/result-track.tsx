import React from 'react';
import { SpotifyTrackType } from '@typedefs/toply.typesdefs';
import { motion } from 'framer-motion';

interface IResultTrackProps {
  track: SpotifyTrackType;
  index: number;
}

const ResultTrack: React.FC<IResultTrackProps> = (props) => {
  const { track, index } = props;

  return (
    <motion.div
      key={track.id}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
        },
        hidden: {
          opacity: 0,
          y: -15,
        },
      }}
      initial='hidden'
      animate='visible'
      transition={{
        duration: 0.75,
        delay: index * 0.1,
        staggerChildren: 0.15,
        type: 'spring',
      }}
    >
      <div className='flex flex-col relative justify-center items-center '>
        {/* <div className='absolute bottom-0 left-0 bg-stone-800 rounded-md m-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8'
            fill='none'
            viewBox='0 0 24 24'
            stroke='rgb(239 68 68)'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z'
            />
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z'
            />
          </svg>
        </div> */}
        <img
          src={track.album?.images?.[0]?.url}
          alt={track.name}
          key={track.id}
        />
      </div>
    </motion.div>
  );
};

export default ResultTrack;

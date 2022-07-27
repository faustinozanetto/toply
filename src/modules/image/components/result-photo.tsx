import { selectTopSongs } from '@state/slices/toply.slice';
import { motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';

interface IResultPhotoProps {}

const ResultPhoto: React.FC<IResultPhotoProps> = (props) => {
  const {} = props;
  const topSongs = useSelector(selectTopSongs);

  return (
    <div className='w-[350px] p-4 shadow-2xl bg-gradient-to-r from-gray-100 to-gray-300 rounded-xl'>
      <div
        className='grid gap-1.5'
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
        }}
      >
        {topSongs?.map((song, index) => {
          return (
            <motion.div
              key={song.id}
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
              <div className='flex flex-col justify-center items-center w-[100px] h-[100px]'>
                <img
                  src={song.album?.images?.[0]?.url}
                  alt={song.name}
                  key={song.id}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ResultPhoto;

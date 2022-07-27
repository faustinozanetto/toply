import { selectTopSongs } from '@state/slices/toply.slice';
import { motion } from 'framer-motion';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import ResultEntry from './result-entry';

interface IResultImageProps {
  rotation: string;
  startingIndex: number;
}

const ResultImage: React.FC<IResultImageProps> = (props) => {
  const { rotation, startingIndex } = props;
  const topSongs = useSelector(selectTopSongs);

  const getTracks = useMemo(() => {
    if (topSongs && topSongs.length) {
      return topSongs.slice(startingIndex, startingIndex + 10);
    }
  }, [topSongs]);

  return (
    <div
      className='relative w-[350px] h-[330px] p-4shadow-2xl'
      style={{
        transform: `rotate(${rotation})`,
        background: 'url(./assets/images/rough-paper.png)',
        backgroundSize: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Red Dot */}
      <div className='absolute top-0 left-1/2 w-8 h-8 rounded-full z-10 bg-red-500' />
      {/* Image Content */}
      <div className='flex flex-col w-full p-2 justify-start items-start sepia'>
        {getTracks?.map((song, index) => {
          return (
            <motion.div
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
              key={index}
              initial='hidden'
              animate='visible'
              transition={{
                duration: 0.75,
                delay: index * 0.1,
                staggerChildren: 0.15,
                type: 'spring',
              }}
            >
              <ResultEntry name={song.name} key={song.id} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ResultImage;

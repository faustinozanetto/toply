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
      return topSongs.slice(startingIndex, startingIndex + 5);
    }
  }, [topSongs]);

  return (
    <div
      className='block w-[320px] p-2 bg-gradient-to-r from-gray-100 to-gray-300'
      style={{ transform: `rotate(${rotation})` }}
    >
      {/* Image Content */}
      <div className='flex flex-col w-full mb-2 p-2 bg-zinc-800 justify-start items-start sepia'>
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

      {/* Bottom */}
      <span className='font-black'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </span>
    </div>
  );
};

export default ResultImage;

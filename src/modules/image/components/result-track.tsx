import React from 'react';
import { SpotifyTrackType } from '@typedefs/toply.typesdefs';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface IResultTrackProps {
  /** Track data*/
  track: SpotifyTrackType;
  /** Index, used for cascading animation */
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
      <Image
        src={track.album.images[0].url}
        alt={track.name}
        key={track.id}
        width={165}
        height={165}
      />
    </motion.div>
  );
};

export default ResultTrack;

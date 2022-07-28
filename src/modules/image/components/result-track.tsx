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
      {/*   <Image
        src={track.album.images[1].url}
        alt={track.name}
        key={track.id}
        layout='responsive'
        quality={45}
        width={165}
        height={165}
      /> */}
      <picture>
        <img src={track.album.images[1].url} alt={track.name} key={track.id} />
      </picture>
    </motion.div>
  );
};

export default ResultTrack;

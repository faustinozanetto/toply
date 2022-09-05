import { SelectedSongContext } from '@modules/selected-song/context/selected-song-context';
import { setSelectedSong } from '@state/slices/toply.slice';
import type { SpotifyTrackType } from '@typedefs/toply.typesdefs';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';

interface IResultTrackProps {
  /** Track data */
  track: SpotifyTrackType;
  /** Index, used for cascading animation */
  index: number;
}

const ResultTrack: React.FC<IResultTrackProps> = (props) => {
  const { track, index } = props;
  const dispatch = useDispatch();
  const { setShowModal } = useContext(SelectedSongContext);

  /**
   * Shows the selected song modal and it sets the current selected song.
   * @returns void.
   */
  const handleImageSelection = (): void => {
    if (!track.id) return;
    setShowModal(true);
    dispatch(setSelectedSong(track));
  };

  if (!track.album?.images[1]) return null;

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
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.75,
        delay: index * 0.1,
        staggerChildren: 0.15,
        type: 'spring',
      }}
    >
      <Image
        src={track.album.images[1].url}
        alt={track.name}
        layout="responsive"
        width={250}
        height={250}
        onClick={handleImageSelection}
      />
    </motion.div>
  );
};

export default ResultTrack;

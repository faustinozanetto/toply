import { SelectedSongContext } from '@modules/selected-item/context/selected-song-context';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { memo, useContext } from 'react';

interface IResultItemProps {
  /** Item id */
  id: string;
  /** Item descriptor name */
  name: string;
  /** Item image */
  image: string;
  /** Placeholder blur image while loading. */
  blurImage: string;
  /** Index, used for cascading animation */
  index: number;
  /** Callback function called when item is selected */
  onSelected: (id: string) => void;
}

const ResultItem: React.FC<IResultItemProps> = (props) => {
  const { id, name, image, blurImage, index, onSelected } = props;
  const { setShowModal } = useContext(SelectedSongContext);

  /**
   * Shows the selected song modal and it sets the current selected song.
   * @returns void.
   */
  const handleItemSelection = (): void => {
    if (!id) return;
    setShowModal(true);
    onSelected(id);
  };

  return (
    <motion.div
      key={`${id}#${index}`}
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
      <picture className="cursor-pointer">
        <Image
          src={image}
          alt={name}
          blurDataURL={blurImage}
          placeholder="blur"
          layout="responsive"
          quality={25}
          width={300}
          height={300}
          onClick={handleItemSelection}
        />
      </picture>
    </motion.div>
  );
};

export default memo(ResultItem);

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

type UserTopsResultEntryProps = {
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
};

const UserTopsResultEntry: React.FC<UserTopsResultEntryProps> = (props) => {
  const { id, name, image, blurImage, index } = props;

  return (
    <motion.div
      key={`${id}#${index}`}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: index * 0.1,
          },
        },
        hidden: {
          opacity: 0,
          y: -15,
        },
        hover: {
          scale: 1.05,
          transition: {
            duration: 0.25,
          },
        },
      }}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <div className="relative">
        <Image
          src={image}
          alt={name}
          blurDataURL={blurImage}
          priority={index <= 3}
          placeholder="blur"
          className="rounded-lg drop-shadow-xl"
          width={150}
          height={150}
        />
        <div className="absolute inset-x-0 bottom-0 flex h-6 items-center justify-center rounded-b-lg bg-neutral-50 text-center">
          <span className="clamp-text text-xs font-semibold">{name}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default UserTopsResultEntry;
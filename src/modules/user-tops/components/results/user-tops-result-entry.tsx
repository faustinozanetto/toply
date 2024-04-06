import Image from 'next/image';
import React from 'react';

type UserTopsResultEntryProps = {
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
  const { name, image, blurImage, index } = props;

  return (
    <div className="fade-in-animate relative transition-transform hover:scale-105">
      <Image
        src={image}
        alt={name}
        blurDataURL={blurImage}
        priority={index <= 3}
        placeholder="blur"
        className="aspect-square rounded-lg drop-shadow-xl"
        width={200}
        height={200}
      />
      <div className="absolute inset-x-0 bottom-0 flex h-6 items-center justify-center rounded-b-lg bg-neutral-50 text-center">
        <span className="clamp-text text-xs font-bold md:text-sm">{name}</span>
      </div>
    </div>
  );
};

export default UserTopsResultEntry;

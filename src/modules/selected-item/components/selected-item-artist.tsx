import type { SpotifyArtistType } from '@typedefs/toply.typesdefs';
import Image from 'next/legacy/image';
import React from 'react';

interface ISelectedItemArtistProps {
  selectedArtist: SpotifyArtistType;
}

const SelectedItemArtist: React.FC<ISelectedItemArtistProps> = (props) => {
  const { selectedArtist } = props;

  if (!selectedArtist) return null;

  return (
    <>
      <Image
        src={selectedArtist.images[0]?.url!}
        alt={selectedArtist.name}
        blurDataURL={selectedArtist.images[2]?.url!}
        placeholder="blur"
        quality={40}
        width={300}
        height={300}
      />
      <div className="mt-2 flex flex-col">
        {/* Name */}
        <h3 className="text-xl font-bold leading-6 text-gray-900 sm:text-2xl">{selectedArtist.name}</h3>
        {/* Genres */}
        <h4 className="text-lg font-semibold leading-6 text-gray-900 sm:text-xl">
          Genres
          <ul className="font-normal text-black">
            {selectedArtist.genres.map((genre) => {
              return (
                <li key={genre} className="font-normal">
                  {genre.toUpperCase()}
                </li>
              );
            })}
          </ul>
        </h4>
      </div>
    </>
  );
};

export default SelectedItemArtist;

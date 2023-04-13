import type { SpotifyTrackType } from '@typedefs/toply.typesdefs';
import Image from 'next/image';
import React from 'react';

import SelectedSongEmbed from './selected-song-embed';

interface ISelectedItemSongProps {
  selectedSong: SpotifyTrackType;
}

const SelectedItemSong: React.FC<ISelectedItemSongProps> = (props) => {
  const { selectedSong } = props;

  if (!selectedSong) return null;

  return (
    <>
      <Image
        src={selectedSong?.album?.images[0]?.url!}
        alt={selectedSong.name}
        blurDataURL={selectedSong?.album?.images[2]?.url!}
        placeholder="blur"
        quality={40}
        width={300}
        height={300}
        className="w-full"
      />
      <div className="mt-2 flex flex-col">
        <h3 className="text-xl font-bold leading-6 text-gray-900 sm:text-2xl">{selectedSong.name}</h3>

        {/* Song Name */}
        <h4 className="text-lg font-semibold leading-6 text-gray-900 sm:text-xl">Album: {selectedSong.album?.name}</h4>
        {/* Song Artists */}
        <h5 className="text-lg font-semibold leading-6 text-gray-900 sm:text-xl">
          Arists
          <ul className="font-normal text-black">
            {selectedSong.artists.map((artist) => {
              return <li key={artist.id}>{artist.name}</li>;
            })}
          </ul>
        </h5>

        {/* Listen Song */}
        <SelectedSongEmbed selectedSong={selectedSong} />
      </div>
    </>
  );
};

export default SelectedItemSong;

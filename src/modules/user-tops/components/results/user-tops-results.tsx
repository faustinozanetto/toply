import type { Track } from '@modules/user-tops/types/user-tops.types';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';

const UserTopsResultEntry = dynamic(() => import('./user-tops-result-entry'));

type UserTopsResultsProps = {
  topTracks: Track[];
};

const UserTopsResults: React.FC<UserTopsResultsProps> = (props) => {
  const { topTracks } = props;

  const fallbackImageUrl = '/images/image-fallback.webp';

  return (
    <div className="relative z-0 flex flex-col items-center rounded-lg bg-neutral-50 p-3.5 shadow-xl">
      <Image
        src="/images/rough-paper.webp"
        alt="Background"
        fill
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        quality={25}
        priority
        className="absolute -z-10 rounded-lg bg-cover object-cover sepia-[30%]"
      />
      <div className="z-10 grid grid-cols-3 gap-2">
        {topTracks.map((track, index) => {
          const highQualityImage = track.album.images[1]?.url ?? fallbackImageUrl;
          const lowQualityImage = track.album.images[2]?.url ?? fallbackImageUrl;
          return (
            <UserTopsResultEntry
              key={track.id}
              index={index}
              name={track.name}
              image={highQualityImage}
              blurImage={lowQualityImage}
            />
          );
        })}
      </div>
      <div className="mt-4 text-sm font-bold text-black opacity-60">https://toply.vercel.app/</div>
    </div>
  );
};

export default UserTopsResults;

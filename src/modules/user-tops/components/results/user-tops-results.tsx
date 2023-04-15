import Skeleton from '@modules/ui/components/skeleton/skeleton';
import { useUserTopsContext } from '@modules/user-tops/context/user-tops-context';
import { USER_TOPS_MAX_RESULTS } from '@modules/user-tops/lib/user-tops.lib';
import clsx from 'clsx';
import React from 'react';

import UserTopsResultEntry from './user-tops-result-entry';

const UserTopsResults: React.FC = () => {
  const { state: userTopsState } = useUserTopsContext();

  const fallbackImageUrl = '/assets/images/image-fallback.webp';
  const isFeaturedTrack = (index: number) => index === 0;

  return (
    <div
      className="flex flex-col items-center rounded-lg bg-neutral-50 p-3.5 shadow-xl"
      style={{
        filter: 'sepia(0.35)',
        backgroundImage: `url(/assets/images/rough-paper.webp)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
      }}
    >
      {/* Result Grid */}
      <div className="grid grid-cols-3 gap-2">
        {userTopsState.topTracks.length === 0 || userTopsState.contentLoading
          ? Array.from<number>({ length: USER_TOPS_MAX_RESULTS }).map((_placeholder, index) => {
              return (
                <div
                  key={index}
                  className={clsx(
                    'rounded-lg bg-neutral-400/60 drop-shadow-xl',
                    isFeaturedTrack(index)
                      ? 'col-span-2 row-span-2 h-[215px] w-[215px] md:h-[315px] md:w-[315px]'
                      : 'h-[105px] w-[105px] md:h-[150px] md:w-[150px]'
                  )}
                />
              );
            })
          : userTopsState.topTracks.map((track, index) => {
              const highQualityImage = track.album.images[0]?.url ?? fallbackImageUrl;
              const lowQualityImage = track.album.images[2]?.url ?? fallbackImageUrl;
              return (
                <Skeleton
                  key={track.id}
                  isLoaded={!userTopsState.contentLoading}
                  className={clsx(
                    isFeaturedTrack(index)
                      ? 'col-span-2 row-span-2 h-[215px] w-[215px] md:h-[315px] md:w-[315px]'
                      : 'h-[105px] w-[105px] md:h-[150px] md:w-[150px]'
                  )}
                >
                  <UserTopsResultEntry
                    index={index}
                    name={track.name}
                    image={highQualityImage}
                    blurImage={lowQualityImage}
                  />
                </Skeleton>
              );
            })}
      </div>
      {/* Watermark */}
      <div className="mt-4 font-bold text-black opacity-60">https://toply.vercel.app/</div>
    </div>
  );
};

export default UserTopsResults;

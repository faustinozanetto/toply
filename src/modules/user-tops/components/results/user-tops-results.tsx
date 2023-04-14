import Skeleton from '@modules/ui/components/skeleton/skeleton';
import { useUserTopsContext } from '@modules/user-tops/context/user-tops-context';
import React from 'react';

import UserTopsResultEntry from './user-tops-result-entry';

const UserTopsResults: React.FC = () => {
  const { state: userTopsState } = useUserTopsContext();

  return (
    <div
      className="flex flex-col items-center rounded-lg bg-neutral-50 p-4 shadow-xl"
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
        {userTopsState.topTracks.map((track, index) => {
          return (
            <Skeleton key={track.id} isLoaded={!userTopsState.contentLoading}>
              <UserTopsResultEntry
                index={index}
                id={track.id}
                name={track.name}
                image={track.album.images[0]?.url!}
                blurImage={track.album.images[2]?.url!}
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

import { Skeleton } from '@modules/ui/components/skeleton';
import useUserTops from '@modules/user-tops/hooks/user-user-tops';
import { USER_TOPS_MAX_RESULTS } from '@modules/user-tops/lib/user-tops.lib';
import React from 'react';

import UserTopsResultEntry from './user-tops-result-entry';

const UserTopsResultsGrid: React.FC = () => {
  const { data, error, isLoading, isFetching } = useUserTops();

  const fallbackImageUrl = '/images/image-fallback.webp';

  return (
    <div className="z-10 grid w-full grid-cols-3 gap-2">
      {(isLoading || isFetching) &&
        Array.from({ length: USER_TOPS_MAX_RESULTS }).map((_, index) => (
          <Skeleton key={`top-track-placeholder-${index}`} className="aspect-square" />
        ))}

      {!(isLoading || isFetching) && error && (
        <p className="col-span-3 text-center font-medium">Could not calculate top tracks :/. Please try again later.</p>
      )}

      {!(isLoading || isFetching) &&
        data &&
        data.tracks &&
        data.tracks.map((track, index) => {
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
  );
};

export default UserTopsResultsGrid;

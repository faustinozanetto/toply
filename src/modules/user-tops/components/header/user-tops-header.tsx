'use client';

import SpotifyLogo from '@modules/branding/components/spotify-logo';
import { Skeleton } from '@modules/ui/components/skeleton';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import React from 'react';

const UserTopsHeader: React.FC = () => {
  const { data: session, status } = useSession();

  return (
    <div className="relative z-0 p-4">
      <Image
        src="/images/rough-paper.webp"
        alt="Background"
        fill
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        quality={25}
        priority
        className="absolute -z-10 rounded-lg bg-cover object-cover shadow-lg sepia-[50%]"
      />
      <div className="z-10 flex items-center space-x-2">
        <SpotifyLogo color="#1ed760" size={44} />
        {status === 'loading' && <Skeleton className="h-10 w-full" />}
        {status === 'authenticated' && (
          <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">{session?.user.name}&apos;s Toply</h2>
        )}
      </div>
    </div>
  );
};

export default UserTopsHeader;

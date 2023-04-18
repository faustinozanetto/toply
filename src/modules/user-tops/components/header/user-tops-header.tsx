import { useAuthContext } from '@modules/auth/context/auth-context';
import SpotifyLogo from '@modules/branding/components/spotify-logo';
import Skeleton from '@modules/ui/components/skeleton/skeleton';
import Image from 'next/image';
import React from 'react';

const UserTopsHeader: React.FC = () => {
  const { state } = useAuthContext();

  return (
    <div className="relative z-0 p-4">
      <Image
        src="/assets/images/rough-paper.webp"
        alt="Background"
        fill
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        quality={25}
        priority
        className="absolute -z-10 rounded-lg bg-cover object-cover sepia-[30%]"
      />
      <div className="z-10 flex items-center space-x-2">
        <SpotifyLogo color="#1ed760" size={44} />
        <Skeleton isLoaded={state.username !== null} className="w-full">
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">{state.username}&apos;s Toply</h2>
        </Skeleton>
      </div>
    </div>
  );
};

export default UserTopsHeader;

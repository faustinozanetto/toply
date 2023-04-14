import SpotifyLogo from '@modules/branding/components/spotify-logo';
import Skeleton from '@modules/ui/components/skeleton/skeleton';
import { useSession } from 'next-auth/react';
import React from 'react';

const UserTopsHeader: React.FC = () => {
  const { data: session, status } = useSession();

  return (
    <div
      className="flex items-center space-x-2 rounded-lg p-4 shadow-xl"
      style={{
        filter: 'sepia(0.35)',
        backgroundImage: `url(/assets/images/rough-paper.webp)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
      }}
    >
      <SpotifyLogo color="#1ed760" size={44} />
      <Skeleton isLoaded={status === 'authenticated'} className="w-full">
        <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">{session?.user?.name}&apos;s Toply</h2>
      </Skeleton>
    </div>
  );
};

export default UserTopsHeader;

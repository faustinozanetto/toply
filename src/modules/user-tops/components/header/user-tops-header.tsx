import type { SpotifyUserDetailsResponse } from '@modules/auth/types/auth.types';
import SpotifyLogo from '@modules/branding/components/spotify-logo';
import Image from 'next/image';
import React from 'react';

interface UserTopsHeaderProps {
  userDetails: SpotifyUserDetailsResponse;
}

const UserTopsHeader: React.FC<UserTopsHeaderProps> = (props) => {
  const { userDetails } = props;

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
        {userDetails.username && (
          <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">{userDetails.username}&apos;s Toply</h2>
        )}
      </div>
    </div>
  );
};

export default UserTopsHeader;

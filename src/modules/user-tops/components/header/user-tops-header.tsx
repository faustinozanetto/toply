import SpotifyLogo from '@modules/branding/components/spotify-logo';
import Image from 'next/image';
import React from 'react';

type UserTopsHeaderProps = {
  username: string;
};

const UserTopsHeader: React.FC<UserTopsHeaderProps> = (props) => {
  const { username } = props;
  return (
    <div className="relative z-0 p-4">
      <Image
        src="/assets/images/rough-paper.webp"
        alt="Background"
        fill
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        quality={10}
        priority
        className="absolute -z-10 rounded-lg bg-cover object-cover sepia-[30%]"
      />
      <div className="z-10 flex items-center space-x-2">
        <SpotifyLogo color="#1ed760" size={44} />
        <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">{username}&apos;s Toply</h2>
      </div>
    </div>
  );
};

export default UserTopsHeader;

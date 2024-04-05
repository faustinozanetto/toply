import Image from 'next/image';
import React from 'react';

import UserTopsResultsGrid from './user-tops-results-grid';

const UserTopsResults: React.FC = () => {
  return (
    <div className="relative z-0 flex flex-col items-center rounded-lg p-3.5 shadow-xl">
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
      <UserTopsResultsGrid />
      <div className="mt-4 text-sm font-bold opacity-60">https://toply.vercel.app/</div>
    </div>
  );
};

export default UserTopsResults;

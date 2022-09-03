import SpotifyLogo from '@modules/branding/components/spotify-logo';
import { useSession } from 'next-auth/react';
import React from 'react';

import ResultPhoto from './result-photo';

interface IResultsProps {}

const Results: React.FC<IResultsProps> = (props) => {
  const {} = props;
  const { data: session } = useSession();

  return (
    <div className="flex w-full flex-col">
      {/* Header */}
      <div className="mb-4 flex w-full flex-col  items-center justify-center rounded-lg bg-white p-1">
        <div className="flex w-full flex-row items-center justify-start pl-2">
          <SpotifyLogo color="#1ed760" size={36} />
          <h2 className="ml-2 w-full text-lg font-bold leading-loose text-black sm:text-2xl md:text-3xl">
            {session?.user?.name}&apos;s Toply
          </h2>
        </div>
      </div>
      {/* Content */}
      <ResultPhoto />
    </div>
  );
};

export default Results;

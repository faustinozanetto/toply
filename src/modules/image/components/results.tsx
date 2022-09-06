import SpotifyLogo from '@modules/branding/components/spotify-logo';
import { useSession } from 'next-auth/react';
import React from 'react';

import ResultPhoto from './result-photo';

interface IResultsProps {}

const Results: React.FC<IResultsProps> = (props) => {
  const {} = props;
  const { data: session, status } = useSession();

  return (
    <div className="flex w-full flex-col">
      {/* Header */}
      <div
        className="mb-4 flex w-full flex-col  items-center justify-center rounded-lg bg-white p-1"
        style={{
          filter: 'sepia(0.35)',
          backgroundImage: `url(/assets/images/rough-paper.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow:
            'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
        }}
      >
        <div className="flex w-full flex-row items-center justify-start pl-2">
          <SpotifyLogo color="#1ed760" size={36} />
          <h2 className="ml-2 w-full text-lg font-bold leading-loose text-black sm:text-2xl md:text-3xl">
            {status === 'loading' ? 'Loading' : `${session?.user?.name}'s Toply`}
          </h2>
        </div>
      </div>
      {/* Content */}
      <ResultPhoto />
    </div>
  );
};

export default Results;

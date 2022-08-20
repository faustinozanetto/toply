import { useSession } from 'next-auth/react';
import React from 'react';
import ResultPhoto from './result-photo';
import SpotifyLogo from '@modules/branding/components/spotify-logo';

interface IResultsProps {}

const Results: React.FC<IResultsProps> = (props) => {
  const {} = props;
  const { data: session } = useSession();

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <div className="flex flex-col items-center justify-center  bg-white rounded-lg mb-4 p-1 w-full">
        <div className="flex flex-row items-center justify-start w-full pl-2">
          <SpotifyLogo color="#1ed760" size={36} />
          <h2 className="text-lg w-full text-black font-bold ml-2 leading-loose sm:text-2xl md:text-3xl">
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

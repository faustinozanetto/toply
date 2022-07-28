import { useSession } from 'next-auth/react';
import React from 'react';
import ResultImage from './result-track';
import ResultPhoto from './result-photo';

interface IResultsProps {}

const Results: React.FC<IResultsProps> = (props) => {
  const {} = props;
  const { data: session } = useSession();

  return (
    <div className='flex flex-col w-full'>
      {/* Header */}
      <div className='flex flex-col items-center justify-center text-center bg-white rounded-lg mb-4 w-full'>
        <h2 className='text-lg w-full text-black font-bold leading-loose sm:text-2xl md:text-3xl'>
          📊 {session?.user?.name}&apos;s Toply
        </h2>
      </div>
      {/* Content */}
      <ResultPhoto />
    </div>
  );
};

export default Results;

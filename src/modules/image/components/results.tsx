import { useSession } from 'next-auth/react';
import React from 'react';
import ResultImage from './result-image';
import ResultPhoto from './result-photo';

interface IResultsProps {}

const Results: React.FC<IResultsProps> = (props) => {
  const {} = props;
  const { data: session } = useSession();

  return (
    <div className='flex flex-col w-full'>
      {/* Header */}
      <div className='flex flex-col items-center justify-center text-center bg-white rounded-xl mb-4 w-full'>
        <h2 className='text-xl w-full text-black font-bold leading-loose xs:text-2xl sm:text-3xl'>
          📊 {session?.user?.name}&apos;s Toply
        </h2>
      </div>
      {/* Content */}
      <ResultPhoto />
    </div>
  );
};

export default Results;

import { useSession } from 'next-auth/react';
import React from 'react';
import ResultPhoto from './result-photo';
import { useSelector } from 'react-redux';
import { selectTopSongsLoading } from '@state/slices/toply.slice';
import Skeleton from '@modules/loading/components/skeleton';

interface IResultsProps {}

const Results: React.FC<IResultsProps> = (props) => {
  const {} = props;
  const fetchingSongs = useSelector(selectTopSongsLoading);
  const { data: session } = useSession();

  return (
    <div className='flex flex-col w-full'>
      {/* Header */}
      <div className='flex flex-col items-center justify-center text-center bg-white rounded-lg mb-4 w-full'>
        {fetchingSongs ? (
          <Skeleton style={{ height: '50px' }} />
        ) : (
          <h2 className='text-lg w-full text-black font-bold leading-loose sm:text-2xl md:text-3xl'>
            📊 {session?.user?.name}&apos;s Toply
          </h2>
        )}
      </div>
      {/* Content */}
      <ResultPhoto />
    </div>
  );
};

export default Results;

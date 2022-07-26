import Loading from '@modules/loading/components/loading';
import { useSession } from 'next-auth/react';
import React from 'react';

interface IHomeViewProps {}

const HomeView: React.FC<IHomeViewProps> = (props) => {
  const {} = props;
  const { data: session, status } = useSession();

  return (
    <div className='flex flex-col w-full bg-white p-4 rounded-lg drop-shadow-2xl'>
      {status === 'loading' ? (
        <Loading />
      ) : (
        <div className='flex flex-col items-center justify-center text-center pb-4'>
          <h1 className='text-3xl font-semibold text-black'>
            Welcome, {session?.user?.name}
          </h1>
        </div>
      )}
    </div>
  );
};

export default HomeView;

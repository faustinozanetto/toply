import Loading from '@modules/loading/components/loading';
import { selectTopSongs } from '@state/slices/toply.slice';
import { useSession } from 'next-auth/react';
import React from 'react';
import { useSelector } from 'react-redux';

interface IHomeViewProps {}

const HomeView: React.FC<IHomeViewProps> = (props) => {
  const {} = props;
  const topSongs = useSelector(selectTopSongs);
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

          {topSongs?.length &&
            topSongs.map((song) => {
              return (
                <div className='flex flex-col items-center justify-center text-center pb-4'>
                  <h2 className='text-2xl font-semibold text-black'>
                    {song.name}
                  </h2>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default HomeView;

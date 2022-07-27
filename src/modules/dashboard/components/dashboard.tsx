import { selectTopSongs } from '@state/slices/toply.slice';
import React from 'react';
import { useSelector } from 'react-redux';
import Customization from '../../customization/components/customization';

interface IDashboardProps {}

const Dashboard: React.FC<IDashboardProps> = (props) => {
  const {} = props;
  const topSongs = useSelector(selectTopSongs);

  return (
    <div className='flex flex-col w-full'>
      {/* Header */}
      {/* <DashboardHeader /> */}
      {/* Customization */}
      <Customization />

      {topSongs?.length &&
        topSongs.map((song) => {
          return (
            <div
              className='flex flex-col bg-white p-3 mb-1 rounded-lg drop-shadow-2xl justify-center '
              key={song.id}
            >
              <span className='text-lg font-semibold text-black'>
                {song.name}
              </span>
            </div>
          );
        })}
    </div>
  );
};

export default Dashboard;

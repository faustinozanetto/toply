import { selectTopSongs } from '@state/slices/toply.slice';
import React from 'react';
import { useSelector } from 'react-redux';
import DashboardCustomization from './dashboard-customization';
import DashboardHeader from './dashboard-header';

interface IDashboardProps {}

const Dashboard: React.FC<IDashboardProps> = (props) => {
  const {} = props;
  const topSongs = useSelector(selectTopSongs);

  return (
    <div className='flex flex-col w-full'>
      {/* Header */}
      {/* <DashboardHeader /> */}
      {/* Customization */}
      <DashboardCustomization />

      {topSongs?.length &&
        topSongs.map((song) => {
          return (
            <div className='flex flex-col items-center justify-center text-center pb-4'>
              <h2 className='text-2xl font-semibold text-black'>{song.name}</h2>
            </div>
          );
        })}
    </div>
  );
};

export default Dashboard;

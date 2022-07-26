import React from 'react';

interface IDashboardProps {}

const Dashboard: React.FC<IDashboardProps> = (props) => {
  const {} = props;

  return (
    <div className='flex flex-col w-full bg-white p-4 rounded-lg drop-shadow-2xl'>
      {/* Heading */}
      <div className='flex flex-col items-center justify-center text-center text-gray-500'>
        <h1 className='text-3xl font-semibold'>Dashboard</h1>
        <p className='text-lg text-black font-semibold'>
          This is the dashboard page.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;

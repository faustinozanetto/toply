import Dashboard from '@modules/dashboard/components/dashboard';
import { useSession } from 'next-auth/react';
import React from 'react';

interface IHomeViewProps {}

const HomeView: React.FC<IHomeViewProps> = (props) => {
  const {} = props;
  const { data: session, status } = useSession();

  if (status === 'loading' && session === null) {
    return (
      <div className="mb-4 flex flex-col rounded-lg bg-white p-4 drop-shadow-2xl ">
        <h1 className="text-3xl font-semibold text-black">Loading...</h1>
      </div>
    );
  }

  return <Dashboard />;
};

export default HomeView;

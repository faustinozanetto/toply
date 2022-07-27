import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

interface IDashboardHeaderProps {}

const DashboardHeader: React.FC<IDashboardHeaderProps> = (props) => {
  const {} = props;
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return (
      <div className='flex flex-col bg-white p-4 mb-4 rounded-lg drop-shadow-2xl'>
        <h1 className='text-3xl font-semibold text-black'>Loading...</h1>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    router.push('/auth/signin');
  }

  return (
    <div className='flex flex-col bg-white p-4 mb-4 rounded-lg drop-shadow-2xl items-center justify-center text-center'>
      <h1 className='text-2xl font-semibold text-black'>
        Welcome, {session?.user?.name}
      </h1>
    </div>
  );
};

export default DashboardHeader;

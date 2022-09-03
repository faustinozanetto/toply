import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import React from 'react';

interface IDashboardHeaderProps {}

const DashboardHeader: React.FC<IDashboardHeaderProps> = (props) => {
  const {} = props;
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return (
      <div className="mb-4 flex flex-col rounded-lg bg-white p-4 drop-shadow-2xl">
        <h1 className="text-3xl font-semibold text-black">Loading...</h1>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    router.push('/auth/signin');
  }

  return (
    <div className="mb-4 flex flex-col items-center justify-center rounded-lg bg-white p-4 text-center drop-shadow-2xl">
      <h1 className="text-2xl font-semibold text-black">Welcome, {session?.user?.name}</h1>
    </div>
  );
};

export default DashboardHeader;

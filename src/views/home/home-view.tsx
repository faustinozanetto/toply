import Dashboard from '@modules/dashboard/components/dashboard';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
interface IHomeViewProps {}

const HomeView: React.FC<IHomeViewProps> = (props) => {
  const {} = props;
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'unauthenticated') {
    router.push('/auth/signin');
  }

  return <Dashboard />;
};

export default HomeView;

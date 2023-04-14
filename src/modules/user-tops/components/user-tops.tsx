import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';

import { UserTopsActionType } from '../context/reducer/types';
import { useUserTopsContext } from '../context/user-tops-context';
import useUserTops from '../hooks/user-user-tops';
import UserTopsHeader from './header/user-tops-header';
import UserTopsResults from './results/user-tops-results';

const UserTops: React.FC = () => {
  const { data } = useSession();
  const { getTopTracks } = useUserTops();
  const { dispatch } = useUserTopsContext();

  useEffect(() => {
    const fetch = async () => {
      try {
        dispatch({ type: UserTopsActionType.SET_CONTENT_LOADING, payload: { contentLoading: true } });
        const tracks = await getTopTracks('short_term', 12);
        dispatch({ type: UserTopsActionType.SET_TOP_TRACKS, payload: { topTracks: tracks } });
        dispatch({ type: UserTopsActionType.SET_CONTENT_LOADING, payload: { contentLoading: false } });
      } catch (err) {
        console.log({ err });
      }
    };
    fetch();
  }, [data]);

  return (
    <div className="flex flex-col space-y-4">
      {/* Header */}
      <UserTopsHeader />
      {/* Results */}
      <UserTopsResults />
    </div>
  );
};

export default UserTops;

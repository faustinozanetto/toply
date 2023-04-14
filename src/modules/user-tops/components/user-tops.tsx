import UserCustomization from '@modules/customization/components/user-customization';
import ImageExport from '@modules/image-export/components/image-export';
import { useSession } from 'next-auth/react';
import React, { useEffect, useRef } from 'react';

import { UserTopsActionType } from '../context/reducer/types';
import { useUserTopsContext } from '../context/user-tops-context';
import useUserTops from '../hooks/user-user-tops';
import { USER_TOPS_MAX_RESULTS } from '../lib/user-tops.lib';
import UserTopsHeader from './header/user-tops-header';
import UserTopsResults from './results/user-tops-results';

const UserTops: React.FC = () => {
  const { data } = useSession();
  const { getTopTracks } = useUserTops();
  const { dispatch } = useUserTopsContext();

  const resultImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const tracks = await getTopTracks('short_term', USER_TOPS_MAX_RESULTS);
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
      <div ref={resultImageRef} className="space-y-4">
        {/* Header */}
        <UserTopsHeader />
        {/* Results */}
        <UserTopsResults />
      </div>
      {/* Customization */}
      <UserCustomization />
      {/* Image Export */}
      <ImageExport resultImageRef={resultImageRef} />
    </div>
  );
};

export default UserTops;

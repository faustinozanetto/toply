import AuthSignOut from '@modules/auth/components/auth-logout';
import UserCustomization from '@modules/customization/components/user-customization';
import ImageExport from '@modules/image-export/components/image-export';
import React, { useRef } from 'react';

import type { Track } from '../types/user-tops.types';
import UserTopsHeader from './header/user-tops-header';
import UserTopsResults from './results/user-tops-results';

type UserTopsProps = {
  topTracks: Track[];
};

const UserTops: React.FC<UserTopsProps> = (props) => {
  const { topTracks } = props;

  const resultImageRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col space-y-4">
      <div ref={resultImageRef} className="space-y-4">
        {/* Header */}
        <UserTopsHeader />
        {/* Results */}
        <UserTopsResults topTracks={topTracks} />
      </div>
      {/* Customization */}
      <UserCustomization />
      <div className="fixed bottom-0 right-0 flex gap-2 p-4">
        {/* Image Export */}
        <ImageExport resultImageRef={resultImageRef} />
        {/* User Logout */}
        <AuthSignOut />
      </div>
    </div>
  );
};

export default UserTops;

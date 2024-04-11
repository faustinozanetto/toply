'use client';

import AuthSignOut from '@modules/auth/components/auth-logout';
import type { SpotifyUserDetailsResponse } from '@modules/auth/types/auth.types';
import UserCustomization from '@modules/customization/components/user-customization';
import ImageExport from '@modules/image-export/components/image-export';
import React, { useRef } from 'react';

import UserTopsHeader from './header/user-tops-header';
import UserTopsResults from './results/user-tops-results';

interface UserTopsProps {
  userDetails: SpotifyUserDetailsResponse;
}

const UserTops: React.FC<UserTopsProps> = (props) => {
  const { userDetails } = props;
  const resultImageRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col space-y-4">
      <div ref={resultImageRef} className="space-y-4">
        <UserTopsHeader userDetails={userDetails} />
        <UserTopsResults />
      </div>
      <UserCustomization />
      <div className="fixed bottom-0 right-0 flex gap-2 p-4">
        <ImageExport resultImageRef={resultImageRef} />
        <AuthSignOut />
      </div>
    </div>
  );
};

export default UserTops;

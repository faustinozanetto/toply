import UserCustomization from '@modules/customization/components/user-customization';
import ImageExport from '@modules/image-export/components/image-export';
import React, { useRef } from 'react';

import type { Track } from '../types/user-tops.types';
import UserTopsHeader from './header/user-tops-header';
import UserTopsResults from './results/user-tops-results';

type UserTopsProps = {
  username: string;
  topTracks: Track[];
};

const UserTops: React.FC<UserTopsProps> = (props) => {
  const { username, topTracks } = props;

  const resultImageRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col space-y-4">
      <div ref={resultImageRef} className="space-y-4">
        {/* Header */}
        <UserTopsHeader username={username} />
        {/* Results */}
        <UserTopsResults topTracks={topTracks} />
      </div>
      {/* Customization */}
      <UserCustomization />
      {/* Image Export */}
      <ImageExport resultImageRef={resultImageRef} />
    </div>
  );
};

export default UserTops;

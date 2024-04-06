import { Button } from '@modules/ui/components/button/button';
import { SPOTIFY_TIME_RANGES_NAMES } from '@modules/user-tops/lib/user-tops.lib';
import type { SpotifyTopTimeRange } from '@modules/user-tops/types/user-tops.types';
import React from 'react';

interface UserCustomizationTimeRangeEntryProps {
  onSelected: () => void;
  timeRange: SpotifyTopTimeRange;
}

const UserCustomizationTimeRangeEntry: React.FC<UserCustomizationTimeRangeEntryProps> = (props) => {
  const { onSelected, timeRange } = props;

  const label = SPOTIFY_TIME_RANGES_NAMES[timeRange];

  return (
    <Button className="h-7 text-xs" size="sm" aria-label={label} onClick={onSelected}>
      {label}
    </Button>
  );
};

export default UserCustomizationTimeRangeEntry;

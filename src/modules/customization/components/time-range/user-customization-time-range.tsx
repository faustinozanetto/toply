import { UserCustomizationActionType } from '@modules/customization/context/reducer/types';
import { useCustomization } from '@modules/customization/hooks/use-customization';
import { buttonVariants } from '@modules/ui/components/button/button';
import { ClockIcon } from '@modules/ui/components/icons/clock-icon';
import { Popover, PopoverContent, PopoverTrigger } from '@modules/ui/components/popover';
import { SPOTIFY_TIME_RANGES } from '@modules/user-tops/lib/user-tops.lib';
import React from 'react';

import UserCustomizationTimeRangeEntry from './user-customization-time-range-entry';

const UserCustomizationTimeRange: React.FC = () => {
  const { dispatch } = useCustomization();

  return (
    <Popover>
      <PopoverTrigger className={buttonVariants({ size: 'icon' })}>
        <ClockIcon />
      </PopoverTrigger>
      <PopoverContent side="top" className="ml-2 w-auto p-1.5">
        <div className="flex justify-between gap-1">
          {SPOTIFY_TIME_RANGES.map((timeRange) => (
            <UserCustomizationTimeRangeEntry
              key={timeRange}
              timeRange={timeRange}
              onSelected={() => {
                dispatch({ type: UserCustomizationActionType.SET_TIME_RANGE, payload: { timeRange } });
              }}
            />
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserCustomizationTimeRange;

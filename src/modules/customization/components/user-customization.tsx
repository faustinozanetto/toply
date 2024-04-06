import React from 'react';

import UserCustomizationBackground from './background/user-customization-background';
import UserCustomizationTimeRange from './time-range/user-customization-time-range';

const UserCustomization: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 space-x-2 p-4">
      <UserCustomizationBackground />
      <UserCustomizationTimeRange />
    </div>
  );
};

export default UserCustomization;

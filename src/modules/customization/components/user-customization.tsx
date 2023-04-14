import React from 'react';

import { UserCustomizationActionType } from '../context/reducer/types';
import { useUserCustomizationContext } from '../context/user-customization-context';
import { CUSTOMIZATION_BACKGROUNDS } from '../lib/customization.lib';
import UserCustomizationBackground from './background/user-customization-background';

const UserCustomization: React.FC = () => {
  const { dispatch } = useUserCustomizationContext();

  const handleBackgroundCustomization = () => {
    const randomIndex = Math.floor(Math.random() * CUSTOMIZATION_BACKGROUNDS.length);
    const newBackgroundColor = CUSTOMIZATION_BACKGROUNDS[randomIndex] || CUSTOMIZATION_BACKGROUNDS[0];
    dispatch({ type: UserCustomizationActionType.SET_BACKGROUND, payload: { background: newBackgroundColor } });
  };

  return (
    <div className="fixed bottom-0 left-0 p-4">
      <UserCustomizationBackground onClick={handleBackgroundCustomization} />
    </div>
  );
};

export default UserCustomization;

import { UserCustomizationActionType } from '@modules/customization/context/reducer/types';
import { useCustomization } from '@modules/customization/hooks/use-customization';
import { CUSTOMIZATION_BACKGROUNDS } from '@modules/customization/lib/customization.lib';
import { Button } from '@modules/ui/components/button/button';
import React from 'react';

const UserCustomizationBackground: React.FC = () => {
  const { dispatch } = useCustomization();

  const handleBackgroundCustomization = () => {
    const randomIndex = Math.floor(Math.random() * CUSTOMIZATION_BACKGROUNDS.length);
    const newBackgroundColor = CUSTOMIZATION_BACKGROUNDS[randomIndex] || CUSTOMIZATION_BACKGROUNDS[0];

    dispatch({ type: UserCustomizationActionType.SET_BACKGROUND, payload: { background: newBackgroundColor } });
  };

  return (
    <Button aria-label="Customize" size="icon" onClick={handleBackgroundCustomization}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5 stroke-current"
        viewBox="0 0 24 24"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2" />
        <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9" />
        <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12" />
        <line x1="17" y1="17" x2="17" y2="17.01" />
      </svg>
    </Button>
  );
};

export default UserCustomizationBackground;

import { BACKGROUNDS } from '@lib/constants';
import { useCustomizationContext } from '@modules/customization/context/customization-context';
import { CustomizationActionType } from '@modules/customization/context/types';
import Button from '@modules/ui/components/button/button';
import React, { useCallback } from 'react';

interface ICustomizationBackgroundButtonProps {}

const CustomizationBackgroundButton: React.FC<ICustomizationBackgroundButtonProps> = (props) => {
  const {} = props;
  const { dispatch } = useCustomizationContext();

  const handleClick = useCallback(() => {
    const randomBackground: string = BACKGROUNDS[Math.floor(Math.random() * BACKGROUNDS.length)]!;
    dispatch({
      type: CustomizationActionType.SET_BACKGROUND_COLOR,
      payload: {
        backgroundColor: randomBackground,
      },
    });
  }, [dispatch]);

  return (
    <Button aria-label="Customize Background" onClick={handleClick}>
      <div className="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
        <span className="relative ml-1 py-1">Randomize</span>
      </div>
    </Button>
  );
};

export default CustomizationBackgroundButton;

import { BACKGROUNDS } from '@lib/constants';
import { setBackgroundColor } from '@state/slices/toply.slice';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

interface ICustomizationBackgroundButtonProps {}

const CustomizationBackgroundButton: React.FC<ICustomizationBackgroundButtonProps> = (props) => {
  const {} = props;
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    const randomBackground: string = BACKGROUNDS[Math.floor(Math.random() * BACKGROUNDS.length)]!;
    dispatch(setBackgroundColor(randomBackground));
  }, [dispatch]);

  return (
    <button
      className="inline-flex items-center justify-center overflow-hidden rounded-lg bg-rose-700 p-1 text-sm font-semibold text-white transition-colors hover:bg-pink-600 sm:text-base"
      aria-label="Customize Background"
      onClick={handleClick}
    >
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
      <span className="relative ml-1 py-1.5 sm:py-2">Randomize</span>
    </button>
  );
};

export default CustomizationBackgroundButton;

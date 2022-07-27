import { ToplyDataTimeStapEnum } from '@typedefs/toply.typesdefs';
import React from 'react';

interface ICustomizationTimespanButtonProps {
  timeSpan: ToplyDataTimeStapEnum;
}

const CustomizationTimespanButton: React.FC<
  ICustomizationTimespanButtonProps
> = (props) => {
  const { timeSpan } = props;

  return (
    <button className='inline-flex items-center justify-center p-1 overflow-hidden text-md font-semibold text-white rounded-lg bg-gradient-to-r from-rose-700 to-pink-600'>
      <span className='relative py-2 px-3'>{timeSpan}</span>
    </button>
  );
};

export default CustomizationTimespanButton;

import React from 'react';
import { setTimeSpan } from '@state/slices/toply.slice';
import { ToplyDataTimeStapEnum } from '@typedefs/toply.typesdefs';
import { useDispatch } from 'react-redux';

interface ICustomizationTimespanButtonProps {
  timeSpan: ToplyDataTimeStapEnum;
}

const CustomizationTimespanButton: React.FC<
  ICustomizationTimespanButtonProps
> = (props) => {
  const { timeSpan } = props;
  const dispatch = useDispatch();

  return (
    <button
      className='transition-colors inline-flex items-center justify-center p-1 overflow-hidden text-md font-semibold text-white rounded-lg bg-rose-700 hover:bg-pink-600 '
      aria-label={`${timeSpan} Time Span`}
      onClick={async () => {
        await dispatch(setTimeSpan(timeSpan));
      }}
    >
      <span className='relative py-2 px-3'>{timeSpan}</span>
    </button>
  );
};

export default CustomizationTimespanButton;

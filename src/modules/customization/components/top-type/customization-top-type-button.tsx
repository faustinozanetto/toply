import Button from '@modules/ui/components/button/button';
import type { ToplyDataTimeStapEnum } from '@typedefs/toply.typesdefs';
import React from 'react';

interface ICustomizationTimespanButtonProps {
  /* Timespan to pass to the button */
  timeSpan: ToplyDataTimeStapEnum;
  onTimeSpanSelected: () => void;
}

const CustomizationTimespanButton: React.FC<ICustomizationTimespanButtonProps> = (props) => {
  const { timeSpan, onTimeSpanSelected } = props;

  return (
    <Button size="sm" aria-label={`${timeSpan} Time Span`} onClick={onTimeSpanSelected}>
      {timeSpan}
    </Button>
  );
};

export default CustomizationTimespanButton;

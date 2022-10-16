import Button from '@modules/ui/components/button/button';
import type { ToplyDataTimeSpanEnum } from '@typedefs/toply.typesdefs';
import React from 'react';

interface ICustomizationTimespanButtonProps {
  /* Timespan to pass to the button */
  timeSpan: ToplyDataTimeSpanEnum;
  /** Callback to call when selected */
  onTimeSpanSelected: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomizationTimespanButton: React.FC<ICustomizationTimespanButtonProps> = (props) => {
  const { timeSpan, onTimeSpanSelected } = props;

  return (
    <Button size="sm" aria-label={`${timeSpan} Time Span`} onClick={(e) => onTimeSpanSelected(e)}>
      {timeSpan}
    </Button>
  );
};

export default CustomizationTimespanButton;

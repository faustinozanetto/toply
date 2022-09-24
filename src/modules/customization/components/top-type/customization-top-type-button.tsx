import Button from '@modules/ui/components/button/button';
import type { ToplyTopItemsEnum } from '@typedefs/toply.typesdefs';
import React from 'react';

interface ICustomizationTopTypeButtonProps {
  /* Top type to pass to the button */
  topType: ToplyTopItemsEnum;
  /** Callback to call when selected */
  onTopTypeSelected: () => void;
}

const CustomizationTopTypeButton: React.FC<ICustomizationTopTypeButtonProps> = (props) => {
  const { topType, onTopTypeSelected } = props;

  return (
    <Button size="sm" aria-label={`${topType} Top Type`} onClick={onTopTypeSelected}>
      {topType}
    </Button>
  );
};

export default CustomizationTopTypeButton;

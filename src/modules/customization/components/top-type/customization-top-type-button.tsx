import Button from '@modules/ui/components/button/button';
import type { ToplyTopItemsEnum } from '@typedefs/toply.typesdefs';
import React from 'react';

interface ICustomizationTopTypeButtonProps {
  /* Top type to pass to the button */
  topType: ToplyTopItemsEnum;
  /** Callback to call when selected */
  onTopTypeSelected: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomizationTopTypeButton = React.forwardRef<HTMLButtonElement, ICustomizationTopTypeButtonProps>(
  (props, ref) => {
    const { topType, onTopTypeSelected } = props;

    return (
      <Button ref={ref} size="sm" aria-label={`${topType} Top Type`} onClick={(e) => onTopTypeSelected(e)}>
        {topType}
      </Button>
    );
  }
);

CustomizationTopTypeButton.displayName = 'CustomizationTopTypeButton';

export default CustomizationTopTypeButton;

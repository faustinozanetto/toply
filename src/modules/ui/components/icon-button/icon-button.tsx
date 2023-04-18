import clsx from 'clsx';
import * as React from 'react';

import type { ButtonStyle, HTMLButtonProps } from '../button/button';
import { BUTTON_COLOR_SCHEMES } from '../button/button-styles';
import { ICON_BUTTON_BASE_STYLES, ICON_BUTTON_SIZES } from './icon-button-styles';

const getButtonStyles = (style: ButtonStyle, ...rest: string[]): string => {
  const { size = 'base', colorScheme = 'primary', variant = 'solid' } = style;
  return clsx(ICON_BUTTON_BASE_STYLES, ICON_BUTTON_SIZES[size], BUTTON_COLOR_SCHEMES[colorScheme][variant], ...rest);
};

type IconButtonContentProps = IconButtonProps & {
  loading?: boolean;
  icon: React.ReactNode;
};

const IconButtonContent: React.FC<IconButtonContentProps> = (props) => {
  const { loading, icon } = props;

  return (
    <React.Fragment>
      {loading && <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading</span>}
      <span className={clsx({ invisible: loading })}>{icon}</span>
    </React.Fragment>
  );
};

export type IconButtonProps = ButtonStyle & {
  disabled?: boolean;
  icon: React.ReactElement;
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps & HTMLButtonProps>((props, ref) => {
  const { className = '', disabled, size, variant, colorScheme, ...rest } = props;

  return (
    <button
      ref={ref}
      className={getButtonStyles({ size, variant, colorScheme }, clsx(className))}
      type="button"
      aria-disabled={disabled}
      {...rest}
    >
      <IconButtonContent {...props} />
    </button>
  );
});

IconButton.displayName = 'IconButton';

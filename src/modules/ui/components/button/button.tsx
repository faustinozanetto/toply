import clsx from 'clsx';
import React from 'react';

import {
  BUTTON_BASE_STYLES,
  BUTTON_COLOR_SCHEMES,
  BUTTON_SIZES,
  ICON_END_CLASSES,
  ICON_SIZE_CLASSES,
  ICON_START_CLASSES,
} from './button-styles';

export type HTMLButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export type ButtonVariants = 'outline' | 'solid' | 'ghost';
export type ButtonSizes = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';
export type ButtonColorSchemes = 'primary' | 'secondary' | 'danger';

export type AvailableColorSchemes = {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  [key in ButtonColorSchemes]: { [key in ButtonVariants]: string };
};

export type AvaiableSizeVariants = {
  [key in ButtonSizes]: string;
};

export type ButtonStyle = {
  /** Optional: Size of the button, defaults to md. */
  size?: ButtonSizes;
  /** Optional: Variant of the button, defaults to solid. */
  variant?: ButtonVariants;
  /** Optional: Color scheme of the button, defaults to primary. */
  colorScheme?: ButtonColorSchemes;
};

type ButtonIconPosition = 'start' | 'end';

export type ButtonProps = ButtonStyle &
  HTMLButtonProps & {
    disabled?: boolean;
    icon?: React.ReactElement;
    iconPosition?: ButtonIconPosition;
  };

type ButtonContentProps = ButtonProps & {
  loading?: boolean;
  children?: React.ReactNode;
};

const getButtonStyles = (style: ButtonStyle, ...rest: string[]): string => {
  const { size = 'base', colorScheme = 'primary', variant = 'solid' } = style;
  return clsx(BUTTON_BASE_STYLES, BUTTON_SIZES[size], BUTTON_COLOR_SCHEMES[colorScheme][variant], ...rest);
};

const ButtonContent: React.FC<ButtonContentProps> = (props) => {
  const { loading, icon, iconPosition = 'start', size = 'base', children } = props;

  return (
    <React.Fragment>
      {loading && <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading</span>}
      {icon && iconPosition === 'start' && (
        <span className={clsx({ invisible: loading }, ICON_SIZE_CLASSES[size], ICON_START_CLASSES[size])}>{icon}</span>
      )}
      <span className={clsx({ invisible: loading })}>{children}</span>
      {icon && iconPosition === 'end' && (
        <span className={clsx({ invisible: loading }, ICON_SIZE_CLASSES[size], ICON_END_CLASSES[size])}>{icon}</span>
      )}
    </React.Fragment>
  );
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className = '', disabled, size, variant, colorScheme, ...rest } = props;

  return (
    <button
      ref={ref}
      className={getButtonStyles({ size, variant, colorScheme }, className)}
      type="button"
      aria-disabled={disabled}
      disabled={disabled}
      {...rest}
    >
      <ButtonContent {...props} />
    </button>
  );
});

Button.displayName = 'Button';

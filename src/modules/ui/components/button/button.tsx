import clsx from 'clsx';
import React from 'react';

type IButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
};

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const { children, size = 'md', ...rest } = props;

  const buttonVariants = (): string => {
    switch (size) {
      case 'sm':
        return 'py-2.5 px-3 text-base';
      case 'md':
        return 'px-5 py-2.5 text-md';
      case 'lg':
        return 'px-10 py-3.5 text-lg';
      default:
        return 'py-3 px-2.5 text-bas';
    }
  };

  const buttonStyles = clsx(
    'rounded-lg bg-red-200 text-base font-semibold text-red-800 hover:bg-red-300 focus:outline-none focus:ring-4 focus:ring-red-300',
    buttonVariants()
  );

  return (
    <button className={buttonStyles} ref={ref} {...rest}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;

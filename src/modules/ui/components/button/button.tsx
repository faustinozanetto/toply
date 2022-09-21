import React from 'react';

type IButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
};

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <button
      className="rounded-lg bg-red-200 px-2 py-2.5 text-base font-semibold text-red-800 hover:bg-red-300 focus:outline-none focus:ring-4 focus:ring-red-300"
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;

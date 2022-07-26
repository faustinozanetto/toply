import React from 'react';

type ISignInButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const SignInButton: React.FC<ISignInButtonProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <button
      className='inline-flex items-center justify-center mt-2 p-1.5 overflow-hidden text-md font-semibold text-[#191414] rounded-lg bg-[#1ed760] hover:bg-[#1db954]'
      {...rest}
    >
      <span className='relative px-5 py-2.5'>{children}</span>
    </button>
  );
};

export default SignInButton;

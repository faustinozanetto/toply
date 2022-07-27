import React from 'react';

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = (props) => {
  const {} = props;

  return (
    <footer className='flex flex-col items-center justify-center text-center text-gray-500 mt-10 p-4'>
      <p className='text-lg text-black font-semibold'>
        Made with{' '}
        <span role='img' aria-label='heart'>
          ❤️
        </span>{' '}
        by{' '}
        <a
          href='
          https://twitter.com/toply'
          target='_blank'
          rel='noopener noreferrer'
        >
          @toply
        </a>
      </p>
    </footer>
  );
};

export default Footer;

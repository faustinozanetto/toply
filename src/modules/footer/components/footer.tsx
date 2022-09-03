import React from 'react';

import FooterLink from './footer-link';

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = (props) => {
  const {} = props;

  return (
    <footer className="flex flex-col items-center justify-center p-4 text-center">
      {/* Top */}
      <div className="flex flex-row items-center justify-center">
        <FooterLink href="/">Home</FooterLink>
        <FooterLink href="/privacy">Privacy</FooterLink>
        <FooterLink href="/about">About</FooterLink>
      </div>
      {/* Bottom */}
      {/* <div className='flex flex-col items-center justify-center'>
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
      </div> */}
    </footer>
  );
};

export default Footer;

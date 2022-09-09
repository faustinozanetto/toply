import React from 'react';

import type { FooterLinkData } from '../types/footer.types';
import FooterLink from './footer-link';

export const FOOTER_LINKS: FooterLinkData[] = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/privacy',
    label: 'Privacy',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: 'https://github.com/faustinozanetto/toply',
    label: 'Source',
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center p-4 text-center">
      {/* Top */}
      <div className="flex flex-row items-center justify-center">
        {FOOTER_LINKS.map((footerLink, index) => {
          return <FooterLink key={index} data={footerLink} />;
        })}
      </div>
    </footer>
  );
};

export default Footer;

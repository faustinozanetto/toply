import React from 'react';

import { FOOTER_LINKS } from '../lib/footer.lib';
import FooterLink from './footer-link';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-row items-center justify-center gap-2 pb-4">
      {FOOTER_LINKS.map((link, index) => {
        return <FooterLink key={index} {...link} />;
      })}
    </footer>
  );
};

export default Footer;

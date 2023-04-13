import React from 'react';

import { FOOTER_LINKS } from '../lib/footer.lib';
import FooterLink from './footer-link';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center p-4 text-center">
      {/* Top */}
      <div className="flex flex-row items-center justify-center">
        {FOOTER_LINKS.map((link, index) => {
          return <FooterLink key={index} {...link} />;
        })}
      </div>
    </footer>
  );
};

export default Footer;

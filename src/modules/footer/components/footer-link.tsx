import Link from 'next/link';
import React from 'react';

import type { FooterLinkData } from '../types/footer.types';

interface IFooterLinkProps {
  data: FooterLinkData;
}

const FooterLink: React.FC<IFooterLinkProps> = (props) => {
  const { data } = props;

  return (
    <Link href={data.href} passHref>
      <span role="navigation" className="block cursor-pointer p-2 font-semibold text-gray-800">
        {data.label}
      </span>
    </Link>
  );
};

export default FooterLink;

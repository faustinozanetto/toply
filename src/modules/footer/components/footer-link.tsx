import Link from 'next/link';
import React from 'react';

interface FooterLinkProps {
  href: string;
  label: string;
}

const FooterLink: React.FC<FooterLinkProps> = (props) => {
  const { href, label } = props;

  return (
    <Link href={href} passHref>
      <span role="navigation" className="block cursor-pointer p-2 font-semibold text-gray-800">
        {label}
      </span>
    </Link>
  );
};

export default FooterLink;

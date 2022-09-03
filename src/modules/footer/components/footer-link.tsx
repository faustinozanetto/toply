import Link from 'next/link';
import React from 'react';

interface IFooterLinkProps {
  href: string;
  children?: React.ReactNode;
}

const FooterLink: React.FC<IFooterLinkProps> = (props) => {
  const { href, children } = props;

  return (
    <Link href={href} passHref>
      <a className="block cursor-pointer p-2 font-semibold text-gray-800">{children}</a>
    </Link>
  );
};

export default FooterLink;

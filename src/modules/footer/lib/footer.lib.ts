import type FooterLink from '../components/footer-link';

export const FOOTER_LINKS: React.ComponentPropsWithoutRef<typeof FooterLink>[] = [
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
];

import { cn } from '@modules/ui/lib/ui.lib';
import { forwardRef } from 'react';

import type { BaseIconProps } from './base-icon';
import { iconVariants } from './base-icon';

export type SpotifyIconProps = BaseIconProps;

const SpotifyIcon = forwardRef<SVGSVGElement, SpotifyIconProps>(({ className, size, ...props }, ref) => {
  return (
    <svg
      className={cn(iconVariants({ size }), 'stroke-current', className)}
      fill="none"
      ref={ref}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="12" cy="12" r="9" />
      <path d="M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527" />
      <path d="M9 15c1.5 -1 4 -1 5 .5" />
      <path d="M7 9c2 -1 6 -2 10 .5" />
    </svg>
  );
});

SpotifyIcon.displayName = 'SpotifyIcon';

export { SpotifyIcon };

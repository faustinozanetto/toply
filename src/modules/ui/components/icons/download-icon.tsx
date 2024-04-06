import { cn } from '@modules/ui/lib/ui.lib';
import { forwardRef } from 'react';

import type { BaseIconProps } from './base-icon';
import { iconVariants } from './base-icon';

export type DownloadIconProps = BaseIconProps;

const DownloadIcon = forwardRef<SVGSVGElement, DownloadIconProps>(({ className, size, ...props }, ref) => {
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
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
      <polyline points="7 11 12 16 17 11" />
      <line x1="12" y1="4" x2="12" y2="16" />
    </svg>
  );
});

DownloadIcon.displayName = 'DownloadIcon';

export { DownloadIcon };

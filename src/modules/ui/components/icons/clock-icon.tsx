import { cn } from '@modules/ui/lib/ui.lib';
import { forwardRef } from 'react';

import type { BaseIconProps } from './base-icon';
import { iconVariants } from './base-icon';

export type ClockIconProps = BaseIconProps;

const ClockIcon = forwardRef<SVGSVGElement, ClockIconProps>(({ className, size, ...props }, ref) => {
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
      <polyline points="12 7 12 12 15 15" />
    </svg>
  );
});

ClockIcon.displayName = 'ClockIcon';

export { ClockIcon };

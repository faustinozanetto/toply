import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const iconVariants = cva('', {
  variants: {
    size: {
      sm: 'size-4',
      base: 'size-5',
      lg: 'size-6',
    },
  },
  defaultVariants: {
    size: 'base',
  },
});

export type BaseIconProps = React.HTMLAttributes<SVGSVGElement> & VariantProps<typeof iconVariants>;

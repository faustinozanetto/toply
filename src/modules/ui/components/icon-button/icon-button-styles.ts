import type { AvaiableSizeVariants } from '../button/button';

export const ICON_BUTTON_SIZES: AvaiableSizeVariants = {
  xs: 'text-xs p-1',
  sm: 'text-sm leading-4 p-2',
  base: 'text-sm p-2.5',
  lg: 'text-base p-3',
  xl: 'text-lg p-3.5',
  '2xl': 'text-xl md:text-2xl p-4',
};

export const ICON_BUTTON_BASE_STYLES: string =
  'inline-flex appearance-none items-center justify-center select-none relative whitespace-nowrap align-middle leading-[1.2] rounded-lg font-semibold focus-visible:outline-none focus-visible:ring-4 transition-colors text-neutral-900 dark:text-neutral-50';

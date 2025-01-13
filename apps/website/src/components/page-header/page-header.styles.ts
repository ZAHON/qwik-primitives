import { cva } from 'class-variance-authority';

export const pageHeaderStyles = cva(['fixed', 'z-50', 'top-0', 'h-12', 'w-dvw'], {
  variants: {
    variant: {
      default: [
        'bg-background',
        'shadow-[var(--page-header-shadow-color)_0px_1px_0px_0px]',

        '[--page-header-shadow-color:#00002D17]',
        'dark:[--page-header-shadow-color:#D3EDF81D]',
      ],
      ghost: [
        'bg-transparent',
        '[--page-header-shadow-color:transparent]',
        'shadow-[var(--page-header-shadow-color)_0px_1px_0px_0px]',

        'motion-safe:transition',
        'motion-safe:ease-linear',
        'motion-safe:duration-100',

        'data-[scrolling-down]:bg-background',
        'data-[scrolling-down]:[--page-header-shadow-color:#00002D17]',
        'dark:data-[scrolling-down]:[--page-header-shadow-color:#D3EDF81D]',
      ],
    },
  },
});

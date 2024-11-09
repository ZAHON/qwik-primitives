import { cva } from 'class-variance-authority';

export const calloutIconStyles = cva(['pointer-events-none', 'shrink-0', 'flex', 'items-center'], {
  variants: {
    size: {
      '1': ['size-5'],
      '2': ['size-5'],
      '3': ['size-6'],
    },
  },
});

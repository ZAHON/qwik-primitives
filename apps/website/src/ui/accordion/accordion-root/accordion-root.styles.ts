import { cva } from 'class-variance-authority';

export const accordionRootStyles = cva(['bg-panel', 'border', 'border-default-alpha-6'], {
  variants: {
    size: {
      '1': ['rounded-[var(--radius-4)]'],
      '2': ['rounded-[var(--radius-4)]'],
      '3': ['rounded-[var(--radius-5)]'],
    },
  },
});

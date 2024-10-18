import { cva } from 'class-variance-authority';

export const cardRootStyles = cva(['bg-panel', 'border', 'border-default-alpha-6'], {
  variants: {
    size: {
      '1': ['p-3', 'rounded-[var(--radius-4)]'],
      '2': ['p-4', 'rounded-[var(--radius-4)]'],
      '3': ['p-6', 'rounded-[var(--radius-5)]'],
      '4': ['p-8', 'rounded-[var(--radius-5)]'],
      '5': ['p-12', 'rounded-[var(--radius-6)]'],
    },
  },
});

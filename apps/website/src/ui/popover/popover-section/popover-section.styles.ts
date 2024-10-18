import { cva } from 'class-variance-authority';

export const popoverSectionStyles = cva(['relative', 'flex', 'flex-col', 'items-start', 'overflow-auto'], {
  variants: {
    size: {
      '1': ['p-3', 'gap-y-3'],
      '2': ['p-4', 'gap-y-4'],
      '3': ['p-6', 'gap-y-4'],
      '4': ['p-8', 'gap-y-6'],
    },
  },
});

import { cva } from 'class-variance-authority';

export const popoverHeaderStyles = cva(['flex', 'flex-col'], {
  variants: {
    size: {
      '1': ['gap-y-1'],
      '2': ['gap-y-2'],
      '3': ['gap-y-2.5'],
      '4': ['gap-y-3'],
    },
  },
});

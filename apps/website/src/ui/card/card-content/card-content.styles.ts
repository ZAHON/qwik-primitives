import { cva } from 'class-variance-authority';

export const cardContentStyles = cva(['flex', 'flex-col'], {
  variants: {
    size: {
      '1': ['gap-y-1'],
      '2': ['gap-y-1.5'],
      '3': ['gap-y-2'],
      '4': ['gap-y-2.5'],
      '5': ['gap-y-3'],
    },
  },
});

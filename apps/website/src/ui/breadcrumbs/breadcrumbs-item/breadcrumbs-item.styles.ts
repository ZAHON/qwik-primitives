import { cva } from 'class-variance-authority';

export const breadcrumbsItemStyles = cva(['flex', 'items-center'], {
  variants: {
    size: {
      '1': ['gap-x-0.5'],
      '2': ['gap-x-1'],
      '3': ['gap-x-1.5'],
      '4': ['gap-x-1.5'],
    },
  },
});

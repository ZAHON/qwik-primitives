import { cva } from 'class-variance-authority';

export const breadcrumbsListStyles = cva(['flex', 'items-center', 'flex-wrap'], {
  variants: {
    size: {
      '1': ['gap-0.5'],
      '2': ['gap-1'],
      '3': ['gap-1.5'],
      '4': ['gap-1.5'],
    },
  },
});

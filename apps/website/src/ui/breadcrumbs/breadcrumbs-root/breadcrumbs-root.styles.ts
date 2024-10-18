import { cva } from 'class-variance-authority';

export const breadcrumbsRootStyles = cva([''], {
  variants: {
    size: {
      '1': ['text-1'],
      '2': ['text-2'],
      '3': ['text-3'],
    },
  },
});

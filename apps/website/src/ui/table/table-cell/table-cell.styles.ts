import { cva } from 'class-variance-authority';

export const tableCellStyles = cva(['align-top'], {
  variants: {
    size: {
      '1': ['h-9', 'py-2', 'px-2'],
      '2': ['h-11', 'py-3', 'px-3'],
      '3': ['h-12', 'py-3', 'px-4'],
    },
  },
});

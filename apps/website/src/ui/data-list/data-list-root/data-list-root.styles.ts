import { cva } from 'class-variance-authority';

export const dataListRootStyles = cva(['[overflow-wrap:anywhere]', 'font-normal', 'text-start'], {
  variants: {
    size: {
      '1': ['gap-3', 'text-1'],
      '2': ['gap-4', 'text-2'],
      '3': ['gap-5', 'text-3'],
    },
    orientation: {
      horizontal: ['grid', 'grid-cols-[auto_1fr]'],
      vertical: ['flex', 'flex-col'],
    },
  },
});

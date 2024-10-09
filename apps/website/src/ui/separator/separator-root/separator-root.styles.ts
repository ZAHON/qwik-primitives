import { cva } from 'class-variance-authority';

export const separatorRootStyles = cva(['shrink-0', 'bg-default-alpha-6'], {
  variants: {
    orientation: {
      horizontal: ['h-px', 'w-full'],
      vertical: ['h-full', 'w-px'],
    },
  },
});

import { cva } from 'class-variance-authority';

export const separatorRootStyles = cva(['shrink-0'], {
  variants: {
    color: {
      default: ['bg-default-alpha-6'],
      primary: ['bg-primary-alpha-6'],
      success: ['bg-success-alpha-6'],
      warning: ['bg-warning-alpha-6'],
      danger: ['bg-danger-alpha-6'],
    },
    orientation: {
      horizontal: ['h-px', 'w-full'],
      vertical: ['h-full', 'w-px'],
    },
  },
});

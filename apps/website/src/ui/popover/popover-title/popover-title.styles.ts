import { cva } from 'class-variance-authority';

export const popoverTitleStyles = cva(['font-bold', 'text-balance'], {
  variants: {
    size: {
      '1': ['text-2'],
      '2': ['text-5'],
      '3': ['text-5'],
      '4': ['text-6'],
    },
    highContrast: {
      false: ['text-default-alpha-11'],
      true: ['text-default-solid-12'],
    },
  },
});

import { cva } from 'class-variance-authority';

export const popoverTitleStyles = cva(['font-bold'], {
  variants: {
    size: {
      '1': ['text-2'],
      '2': ['text-5'],
      '3': ['text-5'],
      '4': ['text-6'],
    },
    highContrast: {
      false: ['text-default-11'],
      true: ['text-default-12'],
    },
  },
});

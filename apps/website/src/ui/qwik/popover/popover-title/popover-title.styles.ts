import { cva } from 'class-variance-authority';

export const popoverTitleStyles = cva(['font-bold'], {
  variants: {
    size: {
      '1': ['text-base'],
      '2': ['text-lg'],
      '3': ['text-xl'],
      '4': ['text-2xl'],
    },
    highContrast: {
      false: ['text-default-11'],
      true: ['text-default-12'],
    },
  },
});

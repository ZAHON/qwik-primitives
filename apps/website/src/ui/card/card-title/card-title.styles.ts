import { cva } from 'class-variance-authority';

export const cardTitleStyles = cva(['font-bold', 'text-balance'], {
  variants: {
    size: {
      '1': ['text-2'],
      '2': ['text-3'],
      '3': ['text-4'],
      '4': ['text-5'],
      '5': ['text-6'],
    },
    highContrast: {
      false: ['text-default-alpha-11'],
      true: ['text-default-solid-12'],
    },
  },
});

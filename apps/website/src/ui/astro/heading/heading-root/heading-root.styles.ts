import { cva } from 'class-variance-authority';

export const headingRootStyles = cva(['font-bold'], {
  variants: {
    size: {
      '1': ['text-1'],
      '2': ['text-2'],
      '3': ['text-3'],
      '4': ['text-4'],
      '5': ['text-5'],
      '6': ['text-6'],
      '7': ['text-7'],
      '8': ['text-8'],
      '9': ['text-9'],
    },
    highContrast: {
      false: ['text-default-11'],
      true: ['text-default-12'],
    },
  },
});

import { cva } from 'class-variance-authority';

export const popoverDescriptionStyles = cva([''], {
  variants: {
    size: {
      '1': ['text-1'],
      '2': ['text-2'],
      '3': ['text-2'],
      '4': ['text-3'],
    },
    highContrast: {
      false: ['text-default-11'],
      true: ['text-default-12'],
    },
  },
});

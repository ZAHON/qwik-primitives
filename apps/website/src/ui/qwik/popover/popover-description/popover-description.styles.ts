import { cva } from 'class-variance-authority';

export const popoverDescriptionStyles = cva([''], {
  variants: {
    size: {
      '1': ['text-xs'],
      '2': ['text-sm'],
      '3': ['text-sm'],
      '4': ['text-base'],
    },
    highContrast: {
      false: ['text-default-11'],
      true: ['text-default-12'],
    },
  },
});

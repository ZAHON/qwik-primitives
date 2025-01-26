import { cva } from 'class-variance-authority';

export const blockquoteRootStyles = cva(
  ['pl-[min(1.5rem,max(0.75rem,0.5em))]', 'border-l-[max(0.25rem,0.25em)]', 'border-l-primary-alpha-6'],
  {
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
        false: ['text-default-alpha-11'],
        true: ['text-default-solid-12'],
      },
    },
  }
);

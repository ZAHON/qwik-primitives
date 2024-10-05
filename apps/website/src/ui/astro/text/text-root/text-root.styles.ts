import { cva } from 'class-variance-authority';

export const textRootStyles = cva(['leading-[1.5]', 'tracking-[inherit]'], {
  variants: {
    size: {
      '1': ['text-xs', 'leading-[1rem]', 'tracking-[0.0025em]'],
      '2': ['text-sm', 'leading-[1.125rem]', 'tracking-[0em]'],
      '3': ['text-base', 'leading-[1.375rem]', 'tracking-[0em]'],
      '4': ['text-lg', 'leading-[1.5rem]', '-tracking-[0.0025em]'],
      '5': ['text-xl', 'leading-[1.625rem]', '-tracking-[0.005em]'],
      '6': ['text-2xl', 'leading-[1.875rem]', '-tracking-[0.00625em]'],
      '7': ['text-[1.75rem]', 'leading-[2.25rem]', '-tracking-[0.0075em]'],
      '8': ['text-[2.1875rem]', 'leading-[2.5rem]', '-tracking-[0.01em]'],
      '9': ['text-6xl', 'leading-[3.75rem]', '-tracking-[0.025em]'],
    },
    highContrast: {
      false: ['text-default-11'],
      true: ['text-default-12'],
    },
  },
});

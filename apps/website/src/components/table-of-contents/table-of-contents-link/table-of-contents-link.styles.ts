import { cva } from 'class-variance-authority';

export const tableOfContentsLinkStyles = cva(
  [
    'select-none',
    'inline-flex',
    'cursor-pointer',
    'text-2',
    'text-default-alpha-11',
    'decoration-default-alpha-5',
    'decoration-[min(0.125rem,max(0.0625rem,0.05em))]',
    'underline-offset-[calc(0.025em+0.125rem)]',

    'hover:underline',

    'focus:outline-none',
    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-primary-focus',
    'focus-visible:no-underline',
    'focus-visible:rounded-[calc(0.07em*var(--radius-factor))]',
  ],
  {
    variants: {
      depth: {
        1: [''],
        2: [''],
        3: ['ml-6'],
        4: [''],
        5: [''],
        6: [''],
      },
    },
  }
);

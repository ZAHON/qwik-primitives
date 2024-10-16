import { cva } from 'class-variance-authority';

export const tabsListStyles = cva(
  [
    'flex',
    'justify-start',
    'whitespace-nowrap',
    'shadow-[inset_0_-1px_var(--color-default-alpha-6)]',

    'focus:outline-none',
    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-primary-focus',
  ],
  {
    variants: {
      justify: {
        start: ['justify-start'],
        center: ['justify-center'],
        end: ['justify-end'],
      },
    },
  }
);

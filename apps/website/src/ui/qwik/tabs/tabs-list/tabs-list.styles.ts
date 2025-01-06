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
  ],
  {
    variants: {
      color: {
        default: ['focus-visible:outline-primary-focus'],
        primary: ['focus-visible:outline-primary-focus'],
        success: ['focus-visible:outline-success-focus'],
        warning: ['focus-visible:outline-warning-focus'],
        danger: ['focus-visible:outline-danger-focus'],
      },
      justify: {
        start: ['justify-start'],
        center: ['justify-center'],
        end: ['justify-end'],
      },
    },
  }
);

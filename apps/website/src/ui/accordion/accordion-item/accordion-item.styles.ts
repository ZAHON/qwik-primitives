import { cva } from 'class-variance-authority';

export const accordionItemStyles = cva(
  [
    'mt-px',
    'overflow-hidden',
    'shadow-[0_1px_0_var(--color-default-alpha-6)]',

    'first-of-type:mt-0',

    'last-of-type:shadow-[none]',

    'focus-within:has-[button:focus-visible]:outline',
    'focus-within:has-[button:focus-visible]:outline-2',
    'focus-within:has-[button:focus-visible]:-outline-offset-1',
    'focus-within:has-[button:focus-visible]:outline-primary-focus',
  ],
  {
    variants: {
      size: {
        '1': [
          'first-of-type:rounded-tl-[var(--radius-4)]',
          'first-of-type:rounded-tr-[var(--radius-4)]',
          'last-of-type:rounded-bl-[var(--radius-4)]',
          'last-of-type:rounded-br-[var(--radius-4)]',
        ],
        '2': [
          'first-of-type:rounded-tl-[var(--radius-4)]',
          'first-of-type:rounded-tr-[var(--radius-4)]',
          'last-of-type:rounded-bl-[var(--radius-4)]',
          'last-of-type:rounded-br-[var(--radius-4)]',
        ],
        '3': [
          'first-of-type:rounded-tl-[var(--radius-5)]',
          'first-of-type:rounded-tr-[var(--radius-5)]',
          'last-of-type:rounded-bl-[var(--radius-5)]',
          'last-of-type:rounded-br-[var(--radius-5)]',
        ],
      },
    },
  }
);

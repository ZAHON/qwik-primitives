import { cva } from 'class-variance-authority';

export const linkRootStyles = cva(
  [
    'cursor-pointer',
    'decoration-[min(2px,max(1px, 0.05em))]',
    'underline-offset-[calc(0.025em+2px)]',

    'hover:underline',

    'focus:outline-none',
    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:no-underline',
    'focus-visible:rounded-[calc(0.07em*var(--radius-factor))]',
  ],
  {
    variants: {
      color: {
        default: ['focus-visible:outline-primary-focus'],
        primary: ['focus-visible:outline-primary-focus'],
      },
      highContrast: {
        false: [''],
        true: [''],
      },
    },
    compoundVariants: [
      // color default
      {
        color: 'default',
        highContrast: false,
        class: ['text-default-11', 'decoration-default-5'],
      },
      {
        color: 'default',
        highContrast: true,
        class: ['text-default-12', 'decoration-default-6'],
      },

      // color primary
      {
        color: 'primary',
        highContrast: false,
        class: ['text-primary-11', 'decoration-primary-5'],
      },
      {
        color: 'primary',
        highContrast: true,
        class: ['text-primary-12', 'decoration-primary-6'],
      },
    ],
  }
);

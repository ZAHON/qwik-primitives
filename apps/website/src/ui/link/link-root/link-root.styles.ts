import { cva } from 'class-variance-authority';

export const linkRootStyles = cva(
  [
    'group/link',
    'inline-flex',
    'items-center',
    'gap-x-[calc(1em*0.3)]',
    'cursor-pointer',
    'text-inherit',
    'leading-[1.5]',
    'tracking-inherit',
    'decoration-[min(0.125rem,max(0.0625rem,0.05em))]',
    'underline-offset-[calc(0.025em+0.125rem)]',

    'has-[code]:hover:no-underline',

    'focus:outline-none',
    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:no-underline',
    'focus-visible:rounded-[calc(0.07em*var(--radius-factor))]',
  ],
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
      color: {
        default: ['focus-visible:outline-primary-focus', 'selection:bg-primary-selection'],
        primary: ['focus-visible:outline-primary-focus', 'selection:bg-primary-selection'],
        success: ['focus-visible:outline-success-focus', 'selection:bg-success-selection'],
        warning: ['focus-visible:outline-warning-focus', 'selection:bg-warning-selection'],
        danger: ['focus-visible:outline-danger-focus', 'selection:bg-danger-selection'],
      },
      highContrast: {
        false: ['hover:underline'],
        true: ['underline'],
      },
    },
    compoundVariants: [
      // color default
      {
        color: 'default',
        highContrast: false,
        class: ['text-default-alpha-11', 'decoration-default-alpha-5'],
      },
      {
        color: 'default',
        highContrast: true,
        class: ['text-default-solid-12', 'decoration-default-alpha-6'],
      },

      // color primary
      {
        color: 'primary',
        highContrast: false,
        class: ['text-primary-alpha-11', 'decoration-primary-alpha-5'],
      },
      {
        color: 'primary',
        highContrast: true,
        class: ['text-primary-solid-12', 'decoration-primary-alpha-6'],
      },

      // color success
      {
        color: 'success',
        highContrast: false,
        class: ['text-success-alpha-11', 'decoration-success-alpha-5'],
      },
      {
        color: 'success',
        highContrast: true,
        class: ['text-success-solid-12', 'decoration-success-alpha-6'],
      },

      // color warning
      {
        color: 'warning',
        highContrast: false,
        class: ['text-warning-alpha-11', 'decoration-warning-alpha-5'],
      },
      {
        color: 'warning',
        highContrast: true,
        class: ['text-warning-solid-12', 'decoration-warning-alpha-6'],
      },

      // color danger
      {
        color: 'danger',
        highContrast: false,
        class: ['text-danger-alpha-11', 'decoration-danger-alpha-5'],
      },
      {
        color: 'danger',
        highContrast: true,
        class: ['text-danger-solid-12', 'decoration-danger-alpha-6'],
      },
    ],
  }
);

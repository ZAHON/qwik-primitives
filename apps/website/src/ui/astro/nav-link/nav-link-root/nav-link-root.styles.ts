import { cva } from 'class-variance-authority';

export const navLinkRootStyles = cva(
  [
    'h-fit',
    'shrink-0',
    'whitespace-nowrap',
    'inline-flex',
    'justify-center',
    'items-center',
    'select-none',
    'cursor-pointer',
    'bg-transparent',

    'data-[active]:font-medium',

    'motion-safe:transition',
    'motion-safe:duration-100',

    'focus:outline-none',
    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:-outline-offset-1',
  ],
  {
    variants: {
      size: {
        '1': ['py-0.5', 'px-2', 'gap-x-1.5', 'text-1', 'rounded-[max(var(--radius-1),var(--radius-full))]'],
        '2': ['py-1', 'px-2.5', 'gap-x-1.5', 'text-2', 'rounded-[max(var(--radius-2),var(--radius-full))]'],
        '3': ['py-1', 'px-3', 'gap-x-2', 'text-3', 'rounded-[max(var(--radius-2),var(--radius-full))]'],
      },
      color: {
        default: ['hover:bg-default-alpha-3', 'active:bg-default-alpha-4', 'focus-visible:outline-primary-focus'],
        primary: ['hover:bg-primary-alpha-3', 'active:bg-primary-alpha-4', 'focus-visible:outline-primary-focus'],
        success: ['hover:bg-success-alpha-3', 'active:bg-success-alpha-4', 'focus-visible:outline-success-focus'],
        warning: ['hover:bg-warning-alpha-3', 'active:bg-warning-alpha-4', 'focus-visible:outline-warning-focus'],
        danger: ['hover:bg-danger-alpha-3', 'active:bg-danger-alpha-4', 'focus-visible:outline-danger-focus'],
      },
      highContrast: {
        false: [
          'text-default-alpha-11',

          'data-[active]:active:brightness-[0.92]',
          'data-[active]:active:saturate-[1.1]',

          'data-[active]:dark:active:brightness-[1.08]',
          'data-[active]:dark:active:saturate-[1]',
        ],
        true: [
          'text-default-alpha-11',

          'data-[active]:hover:contrast-[0.88]',
          'data-[active]:hover:saturate-[1.1]',
          'data-[active]:hover:brightness-[1.1]',

          'data-[active]:active:contrast-[0.82]',
          'data-[active]:active:saturate-[1.2]',
          'data-[active]:active:brightness-[1.16]',

          'data-[active]:dark:hover:contrast-[0.88]',
          'data-[active]:dark:hover:saturate-[1.3]',
          'data-[active]:dark:hover:brightness-[1.18]',

          'data-[active]:dark:active:contrast-[1]',
          'data-[active]:dark:active:saturate-[1.2]',
          'data-[active]:dark:active:brightness-[0.95]',
        ],
      },
    },
    compoundVariants: [
      // color default
      {
        color: 'default',
        highContrast: false,
        class: [
          'hover:text-default-alpha-11',

          'data-[active]:bg-default-solid-9',
          'data-[active]:text-default-contrast',
          'data-[active]:hover:bg-default-solid-10',
        ],
      },
      {
        color: 'default',
        highContrast: true,
        class: [
          'hover:text-default-solid-12',

          'data-[active]:bg-default-solid-12',
          'data-[active]:text-default-solid-1',
        ],
      },

      // color primary
      {
        color: 'primary',
        highContrast: false,
        class: [
          'hover:text-primary-alpha-11',

          'data-[active]:bg-primary-solid-9',
          'data-[active]:text-primary-contrast',
          'data-[active]:hover:bg-primary-solid-10',
        ],
      },
      {
        color: 'primary',
        highContrast: true,
        class: [
          'hover:text-primary-solid-12',

          'data-[active]:bg-primary-solid-12',
          'data-[active]:text-primary-solid-1',
        ],
      },

      // color success
      {
        color: 'success',
        highContrast: false,
        class: [
          'hover:text-success-alpha-11',

          'data-[active]:bg-success-solid-9',
          'data-[active]:text-success-contrast',
          'data-[active]:hover:bg-success-solid-10',
        ],
      },
      {
        color: 'success',
        highContrast: true,
        class: [
          'hover:text-success-solid-12',

          'data-[active]:bg-success-solid-12',
          'data-[active]:text-success-solid-1',
        ],
      },

      // color warning
      {
        color: 'warning',
        highContrast: false,
        class: [
          'hover:text-warning-alpha-11',

          'data-[active]:bg-warning-solid-9',
          'data-[active]:text-warning-contrast',
          'data-[active]:hover:bg-warning-solid-10',
        ],
      },
      {
        color: 'warning',
        highContrast: true,
        class: [
          'hover:text-warning-solid-12',

          'data-[active]:bg-warning-solid-12',
          'data-[active]:text-warning-solid-1',
        ],
      },

      // color danger
      {
        color: 'danger',
        highContrast: false,
        class: [
          'hover:text-danger-alpha-11',

          'data-[active]:bg-danger-solid-9',
          'data-[active]:text-danger-contrast',
          'data-[active]:hover:bg-danger-solid-10',
        ],
      },
      {
        color: 'danger',
        highContrast: true,
        class: ['hover:text-danger-solid-12', 'data-[active]:bg-danger-solid-12', 'data-[active]:text-danger-solid-1'],
      },
    ],
  }
);

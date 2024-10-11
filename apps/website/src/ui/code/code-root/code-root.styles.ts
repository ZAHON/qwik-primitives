import { cva } from 'class-variance-authority';

export const codeRootStyles = cva(
  [
    'inline-flex',
    'h-fit',
    'box-border',
    'px-[0.25em]',
    'font-mono',
    'text-inherit',
    'leading-[1.25]',
    'tracking-[-0.007em]',
    'whitespace-nowrap',
    'rounded-[calc((0.03125rem+0.2em)*var(--radius-factor))]',

    'motion-safe:transition',
    'motion-safe:duration-100',
  ],
  {
    variants: {
      size: {
        '1': ['text-[0.676875rem]', 'leading-1', 'tracking-[-0.0045em]'],
        '2': ['text-[0.7896875rem]', 'leading-2', 'tracking-[-0.007em]'],
        '3': ['text-[0.9025rem]', 'leading-3', 'tracking-[-0.007em]'],
        '4': ['text-[1.0153125rem]', 'leading-4', 'tracking-[-0.0095em]'],
        '5': ['text-[1.128125rem]', 'leading-5', 'tracking-[-0.012em]'],
        '6': ['text-[1.35375rem]', 'leading-6', 'tracking-[-0.01325em]'],
        '7': ['text-[1.579375rem]', 'leading-7', 'tracking-[-0.0145em]'],
        '8': ['text-[1.97421875rem]', 'leading-8', 'tracking-[-0.017em]'],
        '9': ['text-[3.384375rem]', 'leading-9', 'tracking-[-0.032em]'],
      },
      variant: {
        solid: [''],
        soft: [''],
      },
      color: {
        default: [''],
        primary: [''],
      },
      highContrast: {
        false: [''],
        true: [''],
      },
    },
    compoundVariants: [
      // variant solid and highContrast
      {
        variant: 'solid',
        highContrast: false,
        class: [
          'group-active/link:brightness-[0.92]',
          'group-active/link:saturate-[1.1]',

          'dark:group-active/link:brightness-[1.08]',
          'dark:group-active/link:saturate-[1]',
        ],
      },
      {
        variant: 'solid',
        highContrast: true,
        class: [
          'group-hover/link:contrast-[0.88]',
          'group-hover/link:saturate-[1.1]',
          'group-hover/link:brightness-[1.1]',

          'group-active/link:contrast-[0.82]',
          'group-active/link:saturate-[1.2]',
          'group-active/link:brightness-[1.16]',

          'dark:group-hover/link:contrast-[0.88]',
          'dark:group-hover/link:saturate-[1.3]',
          'dark:group-hover/link:brightness-[1.18]',

          'dark:group-active/link:contrast-[1]',
          'dark:group-active/link:saturate-[1.2]',
          'dark:group-active/link:brightness-[0.95]',
        ],
      },

      // color default
      {
        color: 'default',
        variant: 'solid',
        highContrast: false,
        class: [
          'bg-default-alpha-9',
          'text-default-contrast',
          'selection:bg-default-selection',
          'selection:text-default-solid-12',
          'group-hover/link:bg-default-solid-10',
        ],
      },
      {
        color: 'default',
        variant: 'solid',
        highContrast: true,
        class: [
          'bg-default-solid-12',
          'text-default-solid-1',
          'selection:bg-default-alpha-11',
          'selection:text-default-solid-1',
          'group-hover/link:bg-default-solid-12',
        ],
      },

      {
        color: 'default',
        variant: 'soft',
        highContrast: false,
        class: [
          'bg-default-alpha-3',
          'text-default-alpha-11',
          'group-hover/link:bg-default-alpha-4',
          'group-active/link:bg-default-alpha-5',
        ],
      },

      {
        color: 'default',
        variant: 'soft',
        highContrast: true,
        class: [
          'bg-default-alpha-3',
          'text-default-solid-12',
          'group-hover/link:bg-default-alpha-4',
          'group-active/link:bg-default-alpha-5',
        ],
      },

      // color primary
      {
        color: 'primary',
        variant: 'solid',
        highContrast: false,
        class: [
          'bg-primary-alpha-9',
          'text-primary-contrast',
          'selection:bg-primary-selection',
          'selection:text-primary-solid-12',
          'group-hover/link:bg-primary-solid-10',
        ],
      },
      {
        color: 'primary',
        variant: 'solid',
        highContrast: true,
        class: [
          'bg-primary-solid-12',
          'text-primary-solid-1',
          'selection:bg-primary-alpha-11',
          'selection:text-primary-solid-1',
          'group-hover/link:bg-primary-solid-12',
        ],
      },

      {
        color: 'primary',
        variant: 'soft',
        highContrast: false,
        class: [
          'bg-primary-alpha-3',
          'text-primary-alpha-11',
          'group-hover/link:bg-primary-alpha-4',
          'group-active/link:bg-primary-alpha-5',
        ],
      },

      {
        color: 'primary',
        variant: 'soft',
        highContrast: true,
        class: [
          'bg-primary-alpha-3',
          'text-primary-solid-12',
          'group-hover/link:bg-primary-alpha-4',
          'group-active/link:bg-primary-alpha-5',
        ],
      },
    ],
  }
);

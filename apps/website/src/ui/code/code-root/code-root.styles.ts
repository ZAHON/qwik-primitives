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
        '1': [
          'text-[calc(0.95*0.95*var(--font-size-1))]',
          'leading-1',
          'tracking-[calc(-0.007em+var(--letter-spacing-1))]',
        ],
        '2': [
          'text-[calc(0.95*0.95*var(--font-size-2))]',
          'leading-2',
          'tracking-[calc(-0.007em+var(--letter-spacing-2))]',
        ],
        '3': [
          'text-[calc(0.95*0.95*var(--font-size-3))]',
          'leading-3',
          'tracking-[calc(-0.007em+var(--letter-spacing-3))]',
        ],
        '4': [
          'text-[calc(0.95*0.95*var(--font-size-4))]',
          'leading-4',
          'tracking-[calc(-0.007em+var(--letter-spacing-4))]',
        ],
        '5': [
          'text-[calc(0.95*0.95*var(--font-size-5))]',
          'leading-5',
          'tracking-[calc(-0.007em+var(--letter-spacing-5))]',
        ],
        '6': [
          'text-[calc(0.95*0.95*var(--font-size-6))]',
          'leading-6',
          'tracking-[calc(-0.007em+var(--letter-spacing-6))]',
        ],
        '7': [
          'text-[calc(0.95*0.95*var(--font-size-7))]',
          'leading-7',
          'tracking-[calc(-0.007em+var(--letter-spacing-7))]',
        ],
        '8': [
          'text-[calc(0.95*0.95*var(--font-size-8))]',
          'leading-8',
          'tracking-[calc(-0.007em+var(--letter-spacing-8))]',
        ],
        '9': [
          'text-[calc(0.95*0.95*var(--font-size-9))]',
          'leading-9',
          'tracking-[calc(-0.007em+var(--letter-spacing-9))]',
        ],
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

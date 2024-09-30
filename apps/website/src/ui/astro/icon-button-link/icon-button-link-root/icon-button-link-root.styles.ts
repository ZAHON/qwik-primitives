import { cva } from 'class-variance-authority';

export const iconButtonLinkRootStyles = cva(
  [
    'inline-flex',
    'justify-center',
    'items-center',
    'shrink-0',
    'select-none',
    'cursor-pointer',
    'align-top',

    'motion-safe:transition',
    'motion-safe:duration-200',

    'focus:outline-none',
    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-primary-focus',
  ],
  {
    variants: {
      size: {
        '1': ['size-6', 'rounded-[max(var(--radius-1),var(--radius-full))]'],
        '2': ['size-8', 'rounded-[max(var(--radius-2),var(--radius-full))]'],
        '3': ['size-10', 'rounded-[max(var(--radius-3),var(--radius-full))]'],
        '4': ['size-12', 'rounded-[max(var(--radius-4),var(--radius-full))]'],
      },
      variant: {
        solid: ['focus-visible:outline-offset-2'],
        soft: ['focus-visible:-outline-offset-1'],
        ghost: ['focus-visible:-outline-offset-1', 'bg-transparent'],
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
        class: ['active:brightness-[1.08]'],
      },
      {
        variant: 'solid',
        highContrast: true,
        class: [
          'hover:contrast-[0.88]',
          'hover:saturate-[1.3]',
          'hover:brightness-[1.18]',
          'active:brightness-[0.95]',
          'active:saturate-[1.2]',
        ],
      },

      // color default
      {
        color: 'default',
        variant: 'solid',
        highContrast: false,
        class: ['bg-default-9', 'text-default-contrast', 'hover:bg-default-10'],
      },
      {
        color: 'default',
        variant: 'solid',
        highContrast: true,
        class: ['bg-default-12', 'text-default-1'],
      },

      {
        color: 'default',
        variant: 'soft',
        highContrast: false,
        class: [
          'bg-default-3',
          'text-default-11',
          'hover:bg-default-4',
          'active:bg-default-5',
          'focus-visible:outline-default-focus',
        ],
      },
      {
        color: 'default',
        variant: 'soft',
        highContrast: true,
        class: [
          'bg-default-3',
          'text-default-12',
          'hover:bg-default-4',
          'active:bg-default-5',
          'focus-visible:outline-default-focus',
        ],
      },

      {
        color: 'default',
        variant: 'ghost',
        highContrast: false,
        class: ['text-default-11', 'hover:bg-default-3', 'active:bg-default-4'],
      },
      {
        color: 'default',
        variant: 'ghost',
        highContrast: true,
        class: ['text-default-12', 'hover:bg-default-3', 'active:bg-default-4'],
      },

      // color primary
      {
        color: 'primary',
        variant: 'solid',
        highContrast: false,
        class: ['bg-primary-9', 'text-primary-contrast', 'hover:bg-primary-10'],
      },
      {
        color: 'primary',
        variant: 'solid',
        highContrast: true,
        class: ['bg-primary-12', 'text-primary-1'],
      },

      {
        color: 'primary',
        variant: 'soft',
        highContrast: false,
        class: ['bg-primary-3', 'text-primary-11', 'hover:bg-primary-4', 'active:bg-primary-5'],
      },
      {
        color: 'primary',
        variant: 'soft',
        highContrast: true,
        class: ['bg-primary-3', 'text-primary-12', 'hover:bg-primary-4', 'active:bg-primary-5'],
      },

      {
        color: 'primary',
        variant: 'ghost',
        highContrast: false,
        class: ['text-primary-11', 'hover:bg-primary-3', 'active:bg-primary-4'],
      },
      {
        color: 'primary',
        variant: 'ghost',
        highContrast: true,
        class: ['text-primary-12', 'hover:bg-primary-3', 'active:bg-primary-4'],
      },
    ],
  }
);

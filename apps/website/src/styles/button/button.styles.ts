import { cva } from 'class-variance-authority';

export const buttonStyles = cva(
  [
    'inline-flex',
    'justify-center',
    'items-center',
    'shrink-0',
    'select-none',
    'cursor-default',
    'align-top',

    'motion-safe:transition',
    'motion-safe:duration-200',

    'disabled:cursor-not-allowed',

    'focus:outline-none',
    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-primary-focus',
  ],
  {
    variants: {
      size: {
        '1': ['rounded-[max(var(--radius-1),var(--radius-full))]'],
        '2': ['rounded-[max(var(--radius-2),var(--radius-full))]'],
        '3': ['rounded-[max(var(--radius-3),var(--radius-full))]'],
        '4': ['rounded-[max(var(--radius-4),var(--radius-full))]'],
      },
      shape: {
        button: ['font-medium'],
        icon: ['font-normal'],
      },
      variant: {
        solid: ['focus-visible:outline-offset-2', 'disabled:bg-default-3', 'disabled:text-default-8'],
        soft: ['focus-visible:-outline-offset-1', 'disabled:bg-default-3', 'disabled:text-default-8'],
        ghost: [
          'focus-visible:-outline-offset-1',
          'bg-transparent',
          'disabled:bg-transparent',
          'disabled:text-default-8',
        ],
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
      // shape and size
      {
        shape: 'button',
        size: '1',
        class: ['h-6', 'px-2', 'gap-x-1', 'text-xs', 'tracking-[0.0025em]'],
      },
      {
        shape: 'icon',
        size: '1',
        class: ['size-6'],
      },

      {
        shape: 'button',
        size: '2',
        class: ['h-8', 'px-3', 'gap-x-2', 'text-sm', 'tracking-normal'],
      },
      {
        shape: 'icon',
        size: '2',
        class: ['size-8'],
      },

      {
        shape: 'button',
        size: '3',
        class: ['h-10', 'px-4', 'gap-x-3', 'text-base', 'tracking-normal'],
      },
      {
        shape: 'icon',
        size: '3',
        class: ['size-10'],
      },

      {
        shape: 'button',
        size: '4',
        class: ['h-12', 'px-6', 'gap-x-3', 'text-lg', '-tracking-[0.0025em]'],
      },
      {
        shape: 'icon',
        size: '4',
        class: ['size-12'],
      },

      // variant solid and highContrast
      {
        variant: 'solid',
        highContrast: false,
        class: ['enabled:active:brightness-[1.08]'],
      },
      {
        variant: 'solid',
        highContrast: true,
        class: [
          'enabled:hover:contrast-[0.88]',
          'enabled:hover:saturate-[1.3]',
          'enabled:hover:brightness-[1.18]',
          'enabled:active:brightness-[0.95]',
          'enabled:active:saturate-[1.2]',
        ],
      },

      // color default
      {
        color: 'default',
        variant: 'solid',
        highContrast: false,
        class: ['bg-default-9', 'text-default-contrast', 'enabled:hover:bg-default-10'],
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
          'enabled:hover:bg-default-4',
          'enabled:active:bg-default-5',
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
          'enabled:hover:bg-default-4',
          'enabled:active:bg-default-5',
          'focus-visible:outline-default-focus',
        ],
      },

      {
        color: 'default',
        variant: 'ghost',
        highContrast: false,
        class: ['text-default-11', 'enabled:hover:bg-default-3', 'enabled:active:bg-default-4'],
      },
      {
        color: 'default',
        variant: 'ghost',
        highContrast: true,
        class: ['text-default-12', 'enabled:hover:bg-default-3', 'enabled:active:bg-default-4'],
      },

      // color primary
      {
        color: 'primary',
        variant: 'solid',
        highContrast: false,
        class: ['bg-primary-9', 'text-primary-contrast', 'enabled:hover:bg-primary-10'],
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
        class: ['bg-primary-3', 'text-primary-11', 'enabled:hover:bg-primary-4', 'enabled:active:bg-primary-5'],
      },
      {
        color: 'primary',
        variant: 'soft',
        highContrast: true,
        class: ['bg-primary-3', 'text-primary-12', 'enabled:hover:bg-primary-4', 'enabled:active:bg-primary-5'],
      },

      {
        color: 'primary',
        variant: 'ghost',
        highContrast: false,
        class: ['text-primary-11', 'enabled:hover:bg-primary-3', 'enabled:active:bg-primary-4'],
      },
      {
        color: 'primary',
        variant: 'ghost',
        highContrast: true,
        class: ['text-primary-12', 'enabled:hover:bg-primary-3', 'enabled:active:bg-primary-4'],
      },
    ],
  }
);

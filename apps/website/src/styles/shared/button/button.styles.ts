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
    'motion-safe:duration-100',

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
        solid: ['focus-visible:outline-offset-2', 'disabled:bg-default-alpha-3', 'disabled:text-default-alpha-8'],
        soft: ['focus-visible:-outline-offset-1', 'disabled:bg-default-alpha-3', 'disabled:text-default-alpha-8'],
        ghost: [
          'focus-visible:-outline-offset-1',
          'bg-transparent',
          'disabled:bg-transparent',
          'disabled:text-default-alpha-8',
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
        class: ['h-6', 'px-2', 'gap-x-1', 'text-1'],
      },
      {
        shape: 'icon',
        size: '1',
        class: ['size-6'],
      },

      {
        shape: 'button',
        size: '2',
        class: ['h-8', 'px-3', 'gap-x-2', 'text-2'],
      },
      {
        shape: 'icon',
        size: '2',
        class: ['size-8'],
      },

      {
        shape: 'button',
        size: '3',
        class: ['h-10', 'px-4', 'gap-x-3', 'text-3'],
      },
      {
        shape: 'icon',
        size: '3',
        class: ['size-10'],
      },

      {
        shape: 'button',
        size: '4',
        class: ['h-12', 'px-6', 'gap-x-3', 'text-4'],
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
        class: [
          'enabled:active:brightness-[0.92]',
          'enabled:active:saturate-[1.1]',

          'dark:enabled:active:brightness-[1.08]',
          'dark:enabled:active:saturate-[1]',
        ],
      },
      {
        variant: 'solid',
        highContrast: true,
        class: [
          'enabled:hover:contrast-[0.88]',
          'enabled:hover:saturate-[1.1]',
          'enabled:hover:brightness-[1.1]',

          'enabled:active:contrast-[0.82]',
          'enabled:active:saturate-[1.2]',
          'enabled:active:brightness-[1.16]',

          'enabled:data-[state=open]:contrast-[0.88]',
          'enabled:data-[state=open]:saturate-[1.1]',
          'enabled:data-[state=open]:brightness-[1.1]',

          'dark:enabled:hover:contrast-[0.88]',
          'dark:enabled:hover:saturate-[1.3]',
          'dark:enabled:hover:brightness-[1.18]',

          'dark:enabled:active:contrast-[1]',
          'dark:enabled:active:saturate-[1.2]',
          'dark:enabled:active:brightness-[0.95]',

          'enabled:data-[state=open]:contrast-[0.88]',
          'enabled:data-[state=open]:saturate-[1.3]',
          'enabled:data-[state=open]:brightness-[1.18]',
        ],
      },

      // color default
      {
        color: 'default',
        variant: 'solid',
        highContrast: false,
        class: [
          'bg-default-solid-9',
          'text-default-contrast',
          'enabled:hover:bg-default-solid-10',
          'enabled:data-[state=open]:bg-default-solid-10',
        ],
      },
      {
        color: 'default',
        variant: 'solid',
        highContrast: true,
        class: ['bg-default-solid-12', 'text-default-solid-1'],
      },

      {
        color: 'default',
        variant: 'soft',
        highContrast: false,
        class: [
          'bg-default-alpha-3',
          'text-default-alpha-11',
          'enabled:hover:bg-default-alpha-4',
          'enabled:active:bg-default-alpha-5',
          'focus-visible:outline-default-focus',
          'enabled:data-[state=open]:bg-default-alpha-4',
        ],
      },
      {
        color: 'default',
        variant: 'soft',
        highContrast: true,
        class: [
          'bg-default-alpha-3',
          'text-default-solid-12',
          'enabled:hover:bg-default-alpha-4',
          'enabled:active:bg-default-alpha-5',
          'focus-visible:outline-default-focus',
          'enabled:data-[state=open]:bg-default-alpha-4',
        ],
      },

      {
        color: 'default',
        variant: 'ghost',
        highContrast: false,
        class: [
          'text-default-alpha-11',
          'enabled:hover:bg-default-alpha-3',
          'enabled:active:bg-default-alpha-4',
          'enabled:data-[state=open]:bg-default-alpha-3',
        ],
      },
      {
        color: 'default',
        variant: 'ghost',
        highContrast: true,
        class: [
          'text-default-solid-12',
          'enabled:hover:bg-default-alpha-3',
          'enabled:active:bg-default-alpha-4',
          'enabled:data-[state=open]:bg-default-alpha-3',
        ],
      },

      // color primary
      {
        color: 'primary',
        variant: 'solid',
        highContrast: false,
        class: [
          'bg-primary-solid-9',
          'text-primary-contrast',
          'enabled:hover:bg-primary-solid-10',
          'enabled:data-[state=open]:bg-primary-solid-10',
        ],
      },
      {
        color: 'primary',
        variant: 'solid',
        highContrast: true,
        class: ['bg-primary-solid-12', 'text-default-solid-1'],
      },

      {
        color: 'primary',
        variant: 'soft',
        highContrast: false,
        class: [
          'bg-primary-alpha-3',
          'text-primary-alpha-11',
          'enabled:hover:bg-primary-alpha-4',
          'enabled:active:bg-primary-alpha-5',
          'focus-visible:outline-primary-focus',
          'enabled:data-[state=open]:bg-primary-alpha-4',
        ],
      },
      {
        color: 'primary',
        variant: 'soft',
        highContrast: true,
        class: [
          'bg-primary-alpha-3',
          'text-primary-solid-12',
          'enabled:hover:bg-primary-alpha-4',
          'enabled:active:bg-primary-alpha-5',
          'focus-visible:outline-primary-focus',
          'enabled:data-[state=open]:bg-primary-alpha-4',
        ],
      },

      {
        color: 'primary',
        variant: 'ghost',
        highContrast: false,
        class: [
          'text-primary-alpha-11',
          'enabled:hover:bg-primary-alpha-3',
          'enabled:active:bg-primary-alpha-4',
          'enabled:data-[state=open]:bg-primary-alpha-3',
        ],
      },
      {
        color: 'primary',
        variant: 'ghost',
        highContrast: true,
        class: [
          'text-primary-solid-12',
          'enabled:hover:bg-primary-alpha-3',
          'enabled:active:bg-primary-alpha-4',
          'enabled:data-[state=open]:bg-primary-alpha-3',
        ],
      },
    ],
  }
);

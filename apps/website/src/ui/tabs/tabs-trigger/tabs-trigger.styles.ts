import { cva } from 'class-variance-authority';

export const tabsTriggerStyles = cva(
  [
    'group/tabs-trigger',
    'relative',
    'shrink-0',
    'flex',
    'justify-center',
    'items-center',
    'select-none',
    'cursor-default',

    'motion-safe:transition-colors',
    'motion-safe:duration-100',

    'focus:outline-none',
    'focus-visible:outline-none',

    'enabled:hover:text-default-solid-12',

    'disabled:cursor-not-allowed',

    'data-[state=inactive]:text-default-alpha-11',
    'data-[state=inactive]:before:bg-transparent',

    'data-[state=active]:text-default-solid-12',

    'before:content-[""]',
    'before:absolute',
    'before:bottom-0',
    'before:inset-x-0',
    'before:h-0.5',
    'before:motion-safe:transition-colors',
    'before:motion-safe:duration-100',
  ],
  {
    variants: {
      size: {
        '1': ['h-8', 'px-1', 'text-1'],
        '2': ['h-10', 'px-2', 'text-2'],
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
      // color default
      {
        color: 'default',
        highContrast: false,
        class: ['data-[state=active]:before:bg-default-solid-9'],
      },
      {
        color: 'default',
        highContrast: true,
        class: ['data-[state=active]:before:bg-default-solid-12'],
      },

      // color primary
      {
        color: 'primary',
        highContrast: false,
        class: ['data-[state=active]:before:bg-primary-solid-9'],
      },
      {
        color: 'primary',
        highContrast: true,
        class: ['data-[state=active]:before:bg-primary-solid-12'],
      },
    ],
  }
);

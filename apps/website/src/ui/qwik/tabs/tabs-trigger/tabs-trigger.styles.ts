import { cva } from 'class-variance-authority';

export const tabsTriggerStyles = cva(
  [
    'group',
    'relative',
    'shrink-0',
    'flex',
    'justify-center',
    'items-center',
    'font-medium',
    'select-none',
    'cursor-default',

    'motion-safe:transition-colors',
    'motion-safe:duration-100',

    'focus:outline-none',
    'focus-visible:outline-none',

    'enabled:hover:text-default-12',

    'data-[state=inactive]:text-default-11/85',
    'data-[state=inactive]:before:bg-transparent',

    'data-[state=active]:text-default-12',

    'before:content-[""]',
    'before:absolute',
    'before:-bottom-px',
    'before:inset-x-0',
    'before:h-0.5',
    'before:motion-safe:transition-colors',
    'before:motion-safe:duration-100',
  ],
  {
    variants: {
      size: {
        '1': ['h-8', 'px-1', 'text-xs', 'tracking-[0.0025em]'],
        '2': ['h-10', 'px-2', 'text-sm', 'tracking-normal'],
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
        class: ['data-[state=active]:before:bg-default-9'],
      },
      {
        color: 'default',
        highContrast: true,
        class: ['data-[state=active]:before:bg-default-12'],
      },

      // color primary
      {
        color: 'primary',
        highContrast: false,
        class: ['data-[state=active]:before:bg-primary-9'],
      },
      {
        color: 'primary',
        highContrast: true,
        class: ['data-[state=active]:before:bg-primary-12'],
      },
    ],
  }
);

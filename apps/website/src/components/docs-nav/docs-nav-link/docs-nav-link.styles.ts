import { cva } from 'class-variance-authority';

export const docsNavLinkStyles = cva(
  [
    'py-2',
    'px-3',
    'flex',
    'items-center',
    'gap-x-2',
    'select-none',
    'text-base',
    'text-default-12',
    'rounded-full',

    'lg:text-sm',

    'motion-safe:transition-colors',
    'motion-safe:duration-200',

    'focus:outline-none',
    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:-outline-offset-1',
    'focus-visible:outline-primary-focus',
  ],
  {
    variants: {
      active: {
        false: ['bg-transparent', 'hover:bg-primary-4', 'active:bg-primary-5'],
        true: ['bg-primary-5'],
      },
    },
  }
);
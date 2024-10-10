import { cva } from 'class-variance-authority';

export const docsNavLinkStyles = cva(
  [
    'py-2',
    'px-3',
    'flex',
    'items-center',
    'gap-x-2',
    'select-none',
    'text-3',
    'text-default-solid-12',
    'rounded-full',

    'lg:text-2',

    'motion-safe:transition-colors',
    'motion-safe:duration-100',

    'focus:outline-none',
    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:-outline-offset-1',
    'focus-visible:outline-primary-focus',
  ],
  {
    variants: {
      active: {
        false: ['bg-transparent', 'hover:bg-primary-alpha-4', 'active:bg-primary-alpha-5'],
        true: ['bg-primary-alpha-5', 'text-primary-alpha-11'],
      },
    },
  }
);

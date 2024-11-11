import { cva } from 'class-variance-authority';

export const docsNavLinkStyles = cva(
  [
    'py-2',
    'pl-9',
    'pr-3',
    'flex',
    'items-center',
    'gap-x-2',
    'select-none',
    'text-3',
    'text-default-solid-12',
    'rounded-[max(var(--radius-3),var(--radius-full))]',

    'lg:text-2',

    'motion-safe:transition-colors',
    'motion-safe:duration-100',

    'focus:outline-none',
    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:-outline-offset-2',
    'focus-visible:outline-primary-focus',

    'before:content-[""]',
    'before:size-1',
    'before:bg-default-alpha-11',
    'before:rounded-full',
  ],
  {
    variants: {
      active: {
        false: ['bg-transparent', 'hover:text-primary-alpha-11'],
        true: ['text-primary-alpha-11', 'font-medium', 'before:bg-primary-alpha-11'],
      },
    },
  }
);

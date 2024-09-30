import { cva } from 'class-variance-authority';

export const mobileMenuCloseStyles = cva([
  'size-8',
  'inline-flex',
  'justify-center',
  'items-center',
  'shrink-0',
  'select-none',
  'cursor-default',
  'align-top',
  'text-default-11',
  'bg-transparent',
  'rounded-[max(var(--radius-2),var(--radius-full))]',

  'motion-safe:transition',
  'motion-safe:duration-200',

  'enabled:hover:bg-default-3',

  'enabled:active:bg-default-4',

  'focus:outline-none',
  'focus-visible:outline',
  'focus-visible:outline-2',
  'focus-visible:-outline-offset-1',
  'focus-visible:outline-primary-focus',
]);

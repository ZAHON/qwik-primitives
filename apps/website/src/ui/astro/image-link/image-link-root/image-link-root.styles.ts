import { cva } from 'class-variance-authority';

export const imageLinkRootStyles = cva([
  'shrink-0',
  'inline-flex',
  'select-none',

  'focus:outline-none',
  'focus-visible:outline',
  'focus-visible:outline-2',
  'focus-visible:outline-offset-2',
  'focus-visible:outline-primary-focus',
  'focus-visible:rounded-[calc(0.07em*var(--radius-factor))]',
]);

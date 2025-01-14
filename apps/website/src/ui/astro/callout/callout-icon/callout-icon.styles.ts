import { cva } from 'class-variance-authority';

export const calloutIconStyles = cva([
  'size-[var(--callout-icon-size)]',
  'pointer-events-none',
  'shrink-0',
  'flex',
  'justify-center',
  'items-center',
]);

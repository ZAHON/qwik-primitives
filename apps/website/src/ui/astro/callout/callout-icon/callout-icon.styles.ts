import { cva } from 'class-variance-authority';

export const calloutIconStyles = cva([
  'shrink-0',
  'select-none',
  'flex',
  'items-center',
  'h-[var(--callout-icon-height)]',
]);

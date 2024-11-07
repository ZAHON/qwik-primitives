import { cva } from 'class-variance-authority';

export const codePresentationSpoilerStyles = cva([
  'relative',
  'border',
  'border-t-none',
  'border-default-alpha-6',
  'rounded-b-[var(--radius-4)]',
]);

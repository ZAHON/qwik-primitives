import { cva } from 'class-variance-authority';

export const codePresentationSpoilerStyles = cva([
  'group/code-presentation-spoiler',
  'relative',
  'border-x',
  'border-b',
  'border-default-alpha-6',
  'rounded-b-[var(--radius-4)]',
]);

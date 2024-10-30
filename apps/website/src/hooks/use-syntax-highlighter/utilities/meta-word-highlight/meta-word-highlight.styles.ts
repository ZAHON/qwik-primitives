import { cva } from 'class-variance-authority';

export const highlighWordStyles = cva([
  'px-[0.25em]',
  'h-full',
  'inline-block',
  'bg-primary-alpha-5',
  'rounded-[calc((0.03125rem+0.2em)*var(--radius-factor))]',
]);

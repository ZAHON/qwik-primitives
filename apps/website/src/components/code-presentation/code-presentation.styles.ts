import { cva } from 'class-variance-authority';

export const codePresentationStyles = cva([
  'rounded-[var(--radius-4)]',

  'has-[pre:focus-visible]:outline',
  'has-[pre:focus-visible]:outline-2',
  'has-[pre:focus-visible]:-outline-offset-1',
  'has-[pre:focus-visible]:outline-primary-focus',
]);

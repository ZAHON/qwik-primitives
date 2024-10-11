import { cva } from 'class-variance-authority';

export const tableRowStyles = cva([
  'align-top',
  'text-default-solid-12',
  'shadow-[inset_0_-1px_var(--color-default-alpha-6)]',
  'last-of-type:shadow-[none]',
]);

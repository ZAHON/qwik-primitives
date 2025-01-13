import { cva } from 'class-variance-authority';

export const tableRowStyles = cva([
  'align-[inherit]',
  'text-default-solid-12',
  'last-of-type:[box-shadow:none]',
  '[box-shadow:var(--table-row-box-shadow)]',
]);

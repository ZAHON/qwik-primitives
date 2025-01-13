import { cva } from 'class-variance-authority';

export const tableHeaderStyles = cva([
  'align-[inherit]',
  'bg-[var(--table-header-background-color)]',
  '[box-shadow:var(--table-row-box-shadow)]',
]);

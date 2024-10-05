import { cva } from 'class-variance-authority';

export const tableRowHeaderCellStyles = cva([
  'h-[var(--table-cell-min-height)]',
  'p-[var(--table-cell-padding)]',
  'align-top',
  'font-normal',
  'text-default-12',
]);

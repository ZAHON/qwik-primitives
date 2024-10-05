import { cva } from 'class-variance-authority';

export const tableColumnHeaderCellStyles = cva([
  'h-[var(--table-cell-min-height)]',
  'p-[var(--table-cell-padding)]',
  'align-top',
  'font-bold',
]);

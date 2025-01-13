import { cva } from 'class-variance-authority';

export const tableColumnHeaderCellStyles = cva(
  [
    'box-border',
    'h-[var(--table-cell-min-height)]',
    'py-[var(--table-cell-padding-y)]',
    'px-[var(--table-cell-padding-x)]',
    'align-[inherit]',
    'font-bold',
  ],
  {
    variants: {
      justify: {
        start: ['text-start'],
        center: ['text-center'],
        end: ['text-end'],
      },
    },
  }
);

import { cva } from 'class-variance-authority';

export const tableRowHeaderCellStyles = cva(
  [
    'box-border',
    'h-[var(--table-cell-min-height)]',
    'py-[var(--table-cell-padding-y)]',
    'px-[var(--table-cell-padding-x)]',
    'align-[inherit]',
    'font-normal',
    'text-default-solid-12',
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

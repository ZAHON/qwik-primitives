import { cva } from 'class-variance-authority';

export const tableRootStyles = cva(
  ['bg-panel', 'border', 'border-default-6', 'bg-clip-padding', 'whitespace-nowrap', 'overflow-auto'],
  {
    variants: {
      size: {
        '1': [
          'text-sm',
          'rounded-[var(--radius-3)]',
          '[--table-cell-padding:0.5rem]',
          '[--table-cell-min-height:2.25rem]',
        ],
        '2': [
          'text-sm',
          'rounded-[var(--radius-4)]',
          '[--table-cell-padding:0.75rem]',
          '[--table-cell-min-height:2.75rem]',
        ],
        '3': [
          'text-base',
          'rounded-[var(--radius-4)]',
          '[--table-cell-padding:0.75rem_1rem]',
          '[--table-cell-min-height:3rem]',
        ],
      },
      layout: {
        auto: ['[&>table]:table-auto'],
        fixed: ['[&>table]:table-fixed'],
      },
    },
  }
);

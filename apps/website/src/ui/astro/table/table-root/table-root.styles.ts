import { cva } from 'class-variance-authority';

export const tableRootStyles = cva(
  [
    'bg-clip-padding',
    'overflow-auto',

    'has-[[data-table-scroll-area]:focus-visible]:outline',
    'has-[[data-table-scroll-area]:focus-visible]:outline-2',
    'has-[[data-table-scroll-area]:focus-visible]:-outline-offset-2',
    'has-[[data-table-scroll-area]:focus-visible]:outline-primary-focus',

    '[--table-row-box-shadow:inset_0_-1px_var(--color-default-alpha-6)]',
  ],
  {
    variants: {
      size: {
        '1': [
          'text-2',
          'rounded-[calc(var(--radius-3)-0.0625rem)]',

          '[--table-cell-min-height:2.25rem]',
          '[--table-cell-padding-y:0.5rem]',
          '[--table-cell-padding-x:0.5rem]',
        ],
        '2': [
          'text-2',
          'rounded-[calc(var(--radius-4)-0.0625rem)]',

          '[--table-cell-min-height:2.75rem]',
          '[--table-cell-padding-y:0.75rem]',
          '[--table-cell-padding-x:0.75rem]',
        ],
        '3': [
          'text-3',
          'rounded-[calc(var(--radius-4)-0.0625rem)]',

          '[--table-cell-min-height:3rem]',
          '[--table-cell-padding-y:0.75rem]',
          '[--table-cell-padding-x:1rem]',
        ],
      },
      variant: {
        surface: [
          'bg-panel',
          'border',
          'border-default-alpha-6',

          '[--table-header-background-color:var(--color-default-alpha-2)]',
        ],
        ghost: ['bg-transparent', '[--table-header-background-color:transparent]'],
      },
      layout: {
        auto: ['[--table-content-layout:auto]'],
        fixed: ['[--table-content-layout:fixed]'],
      },
    },
  }
);

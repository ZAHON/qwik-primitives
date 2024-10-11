import { cva } from 'class-variance-authority';

export const tableRootStyles = cva(
  [
    'bg-panel',
    'border',
    'border-default-alpha-6',
    'bg-clip-padding',
    'overflow-auto',

    'has-[[data-table-scroll-area]:focus-visible]:outline',
    'has-[[data-table-scroll-area]:focus-visible]:outline-2',
    'has-[[data-table-scroll-area]:focus-visible]:-outline-offset-2',
    'has-[[data-table-scroll-area]:focus-visible]:outline-primary-focus',
  ],
  {
    variants: {
      size: {
        '1': ['text-2', 'rounded-[var(--radius-3)]'],
        '2': ['text-2', 'rounded-[var(--radius-4)]'],
        '3': ['text-3', 'rounded-[var(--radius-4)]'],
      },
    },
  }
);

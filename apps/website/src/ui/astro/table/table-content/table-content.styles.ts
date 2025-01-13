import { cva } from 'class-variance-authority';

export const tableContentStyles = cva([
  'box-border',
  'h-0',
  'w-full',
  'text-left',
  'align-top',
  'border-collapse',
  'border-spacing-0',
  '[table-layout:var(--table-content-layout)]',
]);
